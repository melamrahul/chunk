const globalLoader = document.getElementById('globalLoader');
        const mainContent  = document.getElementById('mainContent');
        setTimeout(() => {
            globalLoader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            mainContent.classList.add('visible');
        }, 800); // reduced from 1200ms

        // Adaptive polling: starts fast, backs off, never too slow
        const POLL_MIN      = 2000;   // 2s minimum between polls
        const POLL_MAX      = 5000;   // 5s maximum
        const POLL_STEP     = 500;    // increase by 0.5s each miss
        const MAX_ATTEMPTS  = 35;     // ~2.5 min max wait total

        let state = {
            polling:     false,
            attempts:    0,
            converting:  false,
            downloadUrl: null,
            filename:    'audio.mp3',
            youtubeId:   null,
            url:         null,
            title:       '',
            mode:        'mp3',
            quality:     4,
            formatValue: 1,
            pollDelay:   POLL_MIN,
            aborted:     false,
        };

        const els = {
            rahulContainer: document.getElementById('rahul-container'),
            urlInput:       document.getElementById('yt-url'),
            btnGo:          document.getElementById('btn-go'),
            audioQuality:   document.getElementById('audio-quality'),
            videoQuality:   document.getElementById('video-quality'),
            optAudio:       document.getElementById('opt-audio-quality'),
            optVideo:       document.getElementById('opt-video-quality'),
            tabMp3:         document.getElementById('tab-mp3'),
            tabMp4:         document.getElementById('tab-mp4'),
            statusBox:      document.getElementById('status-box'),
            statusLabel:    document.getElementById('status-label'),
            infinityLoader: document.getElementById('infinity-loader'),
            downloadBtn:    document.getElementById('download-btn'),
            preview:        document.getElementById('video-preview'),
            thumb:          document.getElementById('video-thumb'),
            title:          document.getElementById('video-title'),
            channel:        document.getElementById('video-channel'),
            mainCard:       document.getElementById('main-card'),
            successView:    document.getElementById('success-view'),
            monthText:      document.getElementById('monthText'),
            goalProgress:   document.getElementById('goalProgress'),
            goalPercent:    document.getElementById('goalPercent'),
        };

        els.monthText.textContent = new Date().toLocaleString('default', { month: 'long' });
        const vner = 'https://rahul.serv00.net/apps/yt_convert/';
        updateGoal();
        setInterval(updateGoal, 60000);

        function switchMode(mode) {
            state.mode = mode;
            state.formatValue = (mode === 'mp4') ? 0 : 1;
            reset();
            if (mode === 'mp3') {
                els.tabMp3.classList.add('active');
                els.tabMp4.classList.remove('active');
                els.optAudio.style.display = '';
                els.optVideo.style.display = 'none';
            } else {
                els.tabMp3.classList.remove('active');
                els.tabMp4.classList.add('active');
                els.optAudio.style.display = 'none';
                els.optVideo.style.display = '';
            }
        }

        function extractYoutubeId(input) {
            const m = input.match(/(?:v=|\/shorts\/|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
            return m ? m[1] : null;
        }

        function setStatus(label, showLoader, showTick = false) {
            els.statusBox.classList.add('visible');
            if (showTick) {
                els.statusLabel.innerHTML = `
                    <img src="https://melamrahul.github.io/tools/right-tick.png"
                         alt="✓" style="width:32px;height:32px;vertical-align:middle;margin-right:1px;">
                    ${label}`;
            } else {
                els.statusLabel.textContent = label;
            }
            if (els.infinityLoader) {
                els.infinityLoader.style.display = (showLoader === false) ? 'none' : 'block';
            }
        }

        function reset() {
            state.polling     = false;
            state.attempts    = 0;
            state.converting  = false;
            state.downloadUrl = null;
            state.pollDelay   = POLL_MIN;
            state.aborted     = true; // signal any in-flight poll to stop
            if (els.infinityLoader) els.infinityLoader.style.display = 'none';
            els.downloadBtn.classList.remove('visible');
            els.downloadBtn.style.display = 'none';
            els.statusBox.classList.remove('visible');
            els.urlInput.value = '';
        }

        function makeFilename(title, ext) {
            if (!title) return ext === 'mp4' ? 'video.mp4' : 'audio.mp3';
            const safe = title.replace(/[^\w\s\-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);
            return (safe || (ext === 'mp4' ? 'video' : 'audio')) + '.' + ext;
        }

        function applyTitle(title) {
            if (!title) return;
            const ext = state.mode === 'mp4' ? 'mp4' : 'mp3';
            // Always update filename when we get a real title (overwrite generic fallbacks)
            if (title !== state.title) {
                state.title    = title;
                state.filename = makeFilename(title, ext);
            }
            // Update display only if it's still showing a placeholder
            const cur = els.title.textContent;
            if (!cur || cur === '—' || cur === 'Loading…') {
                els.title.textContent = title;
            }
        }

        async function fetchMeta(youtubeId, url) {
            els.thumb.src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
            els.title.textContent = 'Loading…';
            els.channel.textContent = '';
            els.preview.classList.add('visible');
            try {
                const res = await fetch(vner + 'get_video_data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url }),
                    signal: AbortSignal.timeout(8000),
                });
                if (!res.ok) throw new Error('Network error');
                const data    = await res.json();
                const title   = data?.title   || data?.data?.title   || '';
                const channel = data?.channel || data?.data?.channel || '';
                if (title) {
                    els.title.textContent   = title;
                    els.channel.textContent = channel;
                    applyTitle(title); // sets state.title + state.filename
                } else {
                    els.title.textContent = '—';
                }
                return title; // ← hand back to caller
            } catch (e) {
                els.title.textContent = '—';
                return ''; // don't block on meta failure
            }
        }

        async function callAPI(isCheckOnly) {
            const body = {
                youtube_id:  state.youtubeId,
                url:         state.url,
                title:       state.title,
                quality:     state.quality,
                formatValue: state.formatValue,
            };
            if (isCheckOnly) body.action = 'check_only';

            try {
                const res = await fetch(vner + 'r7q', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                    signal: AbortSignal.timeout(30000), // 30s per request
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return await res.json();
            } catch (e) {
                if (e.name === 'TimeoutError') return { success: false, status: 'converting', message: 'Still processing…' };
                return { success: false, status: 'converting', message: 'Network issue, retrying…' };
            }
        }

        els.btnGo.addEventListener('click', startFlow);
        els.urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') startFlow(); });

        async function startFlow() {
            const raw = els.urlInput.value.trim();
            if (!raw) { alert('Please paste a YouTube link'); return; }
            const id = extractYoutubeId(raw);
            if (!id)  { alert('Invalid YouTube URL'); return; }

            reset();
            state.aborted = false; // new session

            els.rahulContainer.style.display = 'block';
            els.rahulContainer.classList.remove('fade-out');
            els.mainCard.style.display = 'none';
            els.btnGo.disabled = true;
            els.btnGo.textContent = '…';

            state.youtubeId   = id;
            state.url         = raw;
            state.title       = '';
            state.quality     = state.mode === 'mp3'
                ? parseInt(els.audioQuality.value)
                : parseInt(els.videoQuality.value);
            state.attempts    = 0;
            state.pollDelay   = POLL_MIN;

            els.preview.classList.remove('visible');
            els.title.textContent   = '—';
            els.channel.textContent = '';

            setStatus('Lightening fast converting..', true);

            // Step 1: fetch meta FIRST so state.title is set before we call the API.
            // The API needs the real title to store it in the DB correctly.
            // We race it against a 6s timeout so a slow meta fetch doesn't delay conversion.
            await Promise.race([
                fetchMeta(id, raw),
                new Promise(r => setTimeout(r, 6000)), // give up waiting after 6s
            ]);

            if (state.aborted) return;

            // Step 2: now trigger conversion — state.title is populated
            setStatus('Convertion engine started..', true);
            const firstResult = await callAPI(false);

            if (state.aborted) return;

            handleResult(firstResult, false);
        }

        function handleResult(data, wasCheckOnly) {
            if (state.aborted) return;

            if (data.success && data.status === 'ready') {
                const dl = data.download_link || data.server_path || '';
                if (!dl) { scheduleNextPoll(); return; }

                state.downloadUrl = dl;
                if ((data.title || '').trim()) applyTitle(data.title.trim());

                setStatus('Ready to download!', false, true);
                const ext = state.mode === 'mp4' ? 'mp4' : 'mp3';
                els.downloadBtn.style.display = 'block';
                setTimeout(() => els.downloadBtn.classList.add('visible'), 10);
                els.downloadBtn.textContent = `Download ${ext.toUpperCase()}`;
                els.btnGo.disabled = false;
                els.btnGo.textContent = 'Convert';
                return;
            }

            if (data.status === 'error') {
                setStatus('Error: ' + (data.message || 'Something went wrong.'), false);
                els.btnGo.disabled = false;
                els.btnGo.textContent = 'Convert';
                return;
            }

            if (state.attempts >= MAX_ATTEMPTS) {
                setStatus('Timed out. Please try again.', false);
                els.btnGo.disabled = false;
                els.btnGo.textContent = 'Convert';
                return;
            }

            const srvMsg = (data.message || '').toLowerCase();
            const noisy  = srvMsg.includes('rate') || srvMsg.includes('session') ||
                           srvMsg.includes('busy') || srvMsg.includes('refresh');
            const display = (!data.message || noisy) ? 'Converting…' : data.message;
            setStatus(display, true);

            scheduleNextPoll();
        }

        function scheduleNextPoll() {
            state.attempts++;
            // Slowly increase delay: 2s → 2.5s → 3s … capped at 5s
            const delay = Math.min(state.pollDelay, POLL_MAX);
            state.pollDelay = Math.min(state.pollDelay + POLL_STEP, POLL_MAX);

            setTimeout(async () => {
                if (state.aborted) return;
                const data = await callAPI(true); // check_only for subsequent polls
                if (state.aborted) return;
                handleResult(data, true);
            }, delay);
        }

        els.downloadBtn.addEventListener('click', async () => {
            if (!state.youtubeId) return;
            setStatus('Preparing download…', true);

            try {
                // Re-check for freshest URL
                const fresh = await callAPI(true);
                const dlUrl = (fresh.success && (fresh.download_link || fresh.server_path))
                    ? (fresh.download_link || fresh.server_path)
                    : state.downloadUrl;

                if (!dlUrl) { setStatus('Link expired. Please convert again.', false); return; }

                state.downloadUrl = dlUrl;
                if ((fresh.title || '').trim()) applyTitle(fresh.title.trim());

                triggerDownload(dlUrl, state.filename, state.mode, state.title);

                els.rahulContainer.classList.add('fade-out');
                setTimeout(() => {
                    els.rahulContainer.style.display  = 'none';
                    els.downloadBtn.style.display     = 'none';
                    els.successView.classList.add('visible');
                    window.scrollTo(0, 0);
                }, 300);

            } catch (e) {
                setStatus('Download failed. Try again.', false);
            }
        });

        function triggerDownload(remoteUrl, filename, format, title) {
            const rA1 = vner + '_k3z'
                + '?format=' + encodeURIComponent(format)
                + '&title='  + encodeURIComponent(title || '')
                + '&url='    + encodeURIComponent(remoteUrl)
                + '&_='      + Date.now();
            const a = document.createElement('a');
            a.href = rA1;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => document.body.removeChild(a), 2000);
        }

        window.resetUI = function () {
            els.successView.classList.remove('visible');
            els.mainCard.style.display = 'block';
            els.rahulContainer.style.display = 'block';
            els.rahulContainer.classList.remove('fade-out');
            els.preview.classList.remove('visible');
            els.thumb.src = '';
            els.title.textContent   = '—';
            els.channel.textContent = '';
            reset();
            state.aborted = true;
            els.urlInput.focus();
        };

        function updateGoal() {
            fetch(vner + 'total')
                .then(r => r.json())
                .then(data => {
                    const pct = Math.min(((parseFloat(data.total) || 0) / 50) * 100, 100);
                    els.goalProgress.style.width = pct + '%';
                    els.goalPercent.textContent = Math.floor(pct) + '% of Goal';
                })
                .catch(() => { els.goalPercent.textContent = '0%'; });
        }
