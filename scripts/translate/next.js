const ET_LANGS = [
            { code: 'af', flag: '🇿🇦', name: 'Afrikaans', native: 'Afrikaans' },
            { code: 'sq', flag: '🇦🇱', name: 'Albanian', native: 'Shqip' },
            { code: 'am', flag: '🇪🇹', name: 'Amharic', native: 'አማርኛ' },
            { code: 'ar', flag: '🇦🇪', name: 'Arabic', native: 'العربية' },
            { code: 'hy', flag: '🇦🇲', name: 'Armenian', native: 'Հայերեն' },
            { code: 'az', flag: '🇦🇿', name: 'Azerbaijani', native: 'Azərbaycan' },
            { code: 'bn', flag: '🇧🇩', name: 'Bengali', native: 'বাংলা' },
            { code: 'bs', flag: '🇧🇦', name: 'Bosnian', native: 'Bosanski' },
            { code: 'bg', flag: '🇧🇬', name: 'Bulgarian', native: 'Български' },
            { code: 'my', flag: '🇲🇲', name: 'Burmese', native: 'မြန်မာဘာသာ' },
            { code: 'km', flag: '🇰🇭', name: 'Cambodian', native: 'ភាសាខ្មែរ' },
            { code: 'zh-TW', flag: '🇹🇼', name: 'Chinese (Traditional)', native: '繁體中文' },
            { code: 'hr', flag: '🇭🇷', name: 'Croatian', native: 'Hrvatski' },
            { code: 'cs', flag: '🇨🇿', name: 'Czech', native: 'Čeština' },
            { code: 'da', flag: '🇩🇰', name: 'Danish', native: 'Dansk' },
            { code: 'nl', flag: '🇳🇱', name: 'Dutch', native: 'Nederlands' },
            { code: 'en', flag: '🇺🇸', name: 'English', native: 'English' },
            { code: 'et', flag: '🇪🇪', name: 'Estonian', native: 'Eesti' },
            { code: 'tl', flag: '🇵🇭', name: 'Filipino', native: 'Filipino' },
            { code: 'fi', flag: '🇫🇮', name: 'Finnish', native: 'Suomi' },
            { code: 'fr', flag: '🇫🇷', name: 'French', native: 'Français' },
            { code: 'ka', flag: '🇬🇪', name: 'Georgian', native: 'ქართული' },
            { code: 'de', flag: '🇩🇪', name: 'German', native: 'Deutsch' },
            { code: 'el', flag: '🇬🇷', name: 'Greek', native: 'Ελληνικά' },
            { code: 'gu', flag: '🇮🇳', name: 'Gujarati', native: 'ગુજરાતી' },
            { code: 'ht', flag: '🇭🇹', name: 'Haitian Creole', native: 'Kreyòl ayisyen' },
            { code: 'ha', flag: '🇳🇬', name: 'Hausa', native: 'Hausa' },
            { code: 'hi', flag: '🇮🇳', name: 'Hindi', native: 'हिन्दी' },
            { code: 'hu', flag: '🇭🇺', name: 'Hungarian', native: 'Magyar' },
            { code: 'id', flag: '🇮🇩', name: 'Indonesian', native: 'Bahasa Indonesia' },
            { code: 'ga', flag: '🇮🇪', name: 'Irish', native: 'Gaeilge' },
            { code: 'he', flag: '🇮🇱', name: 'Hebrew', native: 'עברית' },
            { code: 'it', flag: '🇮🇹', name: 'Italian', native: 'Italiano' },
            { code: 'ja', flag: '🇯🇵', name: 'Japanese', native: '日本語' },
            { code: 'jv', flag: '🇮🇩', name: 'Javanese', native: 'Basa Jawa' },
            { code: 'kn', flag: '🇮🇳', name: 'Kannada', native: 'ಕನ್ನಡ' },
            { code: 'kk', flag: '🇰🇿', name: 'Kazakh', native: 'Қазақша' },
            { code: 'ko', flag: '🇰🇷', name: 'Korean', native: '한국어' },
            { code: 'ky', flag: '🇰🇬', name: 'Kyrgyz', native: 'Кыргызча' },
            { code: 'lo', flag: '🇱🇦', name: 'Lao', native: 'ລາວ' },
            { code: 'lv', flag: '🇱🇻', name: 'Latvian', native: 'Latviešu' },
            { code: 'lt', flag: '🇱🇹', name: 'Lithuanian', native: 'Lietuvių' },
            { code: 'lb', flag: '🇱🇺', name: 'Luxembourgish', native: 'Lëtzebuergesch' },
            { code: 'mk', flag: '🇲🇰', name: 'Macedonian', native: 'Македонски' },
            { code: 'ms', flag: '🇲🇾', name: 'Malay', native: 'Bahasa Melayu' },
            { code: 'ml', flag: '🇮🇳', name: 'Malayalam', native: 'മലയാളം' },
            { code: 'mn', flag: '🇲🇳', name: 'Mongolian', native: 'Монгол' },
            { code: 'ne', flag: '🇳🇵', name: 'Nepali', native: 'नेपाली' },
            { code: 'no', flag: '🇳🇴', name: 'Norwegian', native: 'Norsk' },
            { code: 'fa', flag: '🇮🇷', name: 'Persian', native: 'فارسی' },
            { code: 'pl', flag: '🇵🇱', name: 'Polish', native: 'Polski' },
            { code: 'pt', flag: '🇧🇷', name: 'Portuguese', native: 'Português' },
            { code: 'pa', flag: '🇮🇳', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
            { code: 'ro', flag: '🇷🇴', name: 'Romanian', native: 'Română' },
            { code: 'ru', flag: '🇷🇺', name: 'Russian', native: 'Русский' },
            { code: 'sr', flag: '🇷🇸', name: 'Serbian', native: 'Српски' },
            { code: 'si', flag: '🇱🇰', name: 'Sinhala', native: 'සිංහල' },
            { code: 'sk', flag: '🇸🇰', name: 'Slovak', native: 'Slovenčina' },
            { code: 'sl', flag: '🇸🇮', name: 'Slovenian', native: 'Slovenščina' },
            { code: 'so', flag: '🇸🇴', name: 'Somali', native: 'Soomaali' },
            { code: 'es', flag: '🇪🇸', name: 'Spanish', native: 'Español' },
            { code: 'sw', flag: '🇰🇪', name: 'Swahili', native: 'Kiswahili' },
            { code: 'sv', flag: '🇸🇪', name: 'Swedish', native: 'Svenska' },
            { code: 'ta', flag: '🇮🇳', name: 'Tamil', native: 'தமிழ்' },
            { code: 'te', flag: '🇮🇳', name: 'Telugu', native: 'తెలుగు' },
            { code: 'th', flag: '🇹🇭', name: 'Thai', native: 'ภาษาไทย' },
            { code: 'tr', flag: '🇹🇷', name: 'Turkish', native: 'Türkçe' },
            { code: 'tk', flag: '🇹🇲', name: 'Turkmen', native: 'Türkmen' },
            { code: 'uk', flag: '🇺🇦', name: 'Ukrainian', native: 'Українська' },
            { code: 'ur', flag: '🇵🇰', name: 'Urdu', native: 'اردو' },
            { code: 'uz', flag: '🇺🇿', name: 'Uzbek', native: 'Oʻzbekcha' },
            { code: 'vi', flag: '🇻🇳', name: 'Vietnamese', native: 'Tiếng Việt' },
            { code: 'cy', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', name: 'Welsh', native: 'Cymraeg' },
            { code: 'yo', flag: '🇳🇬', name: 'Yoruba', native: 'Yorùbá' },
            { code: 'zu', flag: '🇿🇦', name: 'Zulu', native: 'IsiZulu' },
        ];

        const ET_TZ_MAP = {
            /* South Asia */
            'Asia/Kolkata': 'hi',
            'Asia/Colombo': 'si',
            'Asia/Kathmandu': 'ne',
            'Asia/Dhaka': 'bn',
            'Asia/Karachi': 'ur',
            /* Southeast Asia */
            'Asia/Bangkok': 'th',
            'Asia/Vientiane': 'lo',
            'Asia/Jakarta': 'id',
            'Asia/Makassar': 'id',
            'Asia/Jayapura': 'id',
            'Asia/Manila': 'tl',
            'Asia/Rangoon': 'my',
            'Asia/Yangon': 'my',
            'Asia/Phnom_Penh': 'km',
            'Asia/Ho_Chi_Minh': 'vi',
            'Asia/Saigon': 'vi',
            'Asia/Hanoi': 'vi',
            'Asia/Kuala_Lumpur': 'ms',
            'Asia/Singapore': 'ms',
            /* East Asia */
            'Asia/Seoul': 'ko',
            'Asia/Tokyo': 'ja',
            'Asia/Taipei': 'zh-TW',
            'Asia/Hong_Kong': 'zh-TW',
            'Asia/Macau': 'zh-TW',
            /* Central & West Asia */
            'Asia/Dubai': 'ar',
            'Asia/Riyadh': 'ar',
            'Asia/Baghdad': 'ar',
            'Asia/Kuwait': 'ar',
            'Asia/Muscat': 'ar',
            'Asia/Qatar': 'ar',
            'Asia/Bahrain': 'ar',
            'Asia/Beirut': 'ar',
            'Asia/Damascus': 'ar',
            'Asia/Amman': 'ar',
            'Asia/Jerusalem': 'he',
            'Asia/Tehran': 'fa',
            'Asia/Kabul': 'fa',
            'Asia/Tbilisi': 'ka',
            'Asia/Yerevan': 'hy',
            'Asia/Baku': 'az',
            'Asia/Tashkent': 'uz',
            'Asia/Almaty': 'kk',
            'Asia/Bishkek': 'ky',
            'Asia/Ashgabat': 'tk',
            'Asia/Ulaanbaatar': 'mn',
            /* Europe */
            'Europe/Athens': 'el',
            'Europe/Warsaw': 'pl',
            'Europe/Sofia': 'bg',
            'Europe/Istanbul': 'tr',
            'Europe/Berlin': 'de',
            'Europe/Vienna': 'de',
            'Europe/Zurich': 'de',
            'Europe/Madrid': 'es',
            'Europe/Lisbon': 'pt',
            'Europe/Paris': 'fr',
            'Europe/Brussels': 'fr',
            'Europe/Rome': 'it',
            'Europe/Amsterdam': 'nl',
            'Europe/Bucharest': 'ro',
            'Europe/Budapest': 'hu',
            'Europe/Prague': 'cs',
            'Europe/Bratislava': 'sk',
            'Europe/Ljubljana': 'sl',
            'Europe/Zagreb': 'hr',
            'Europe/Belgrade': 'sr',
            'Europe/Sarajevo': 'bs',
            'Europe/Skopje': 'mk',
            'Europe/Tirane': 'sq',
            'Europe/Riga': 'lv',
            'Europe/Vilnius': 'lt',
            'Europe/Tallinn': 'et',
            'Europe/Kiev': 'uk',
            'Europe/Kyiv': 'uk',
            'Europe/Moscow': 'ru',
            'Europe/Helsinki': 'fi',
            'Europe/Stockholm': 'sv',
            'Europe/Oslo': 'no',
            'Europe/Copenhagen': 'da',
            'Europe/Dublin': 'ga',
            'Europe/Luxembourg': 'lb',
            'Europe/Podgorica': 'sr',
            'Europe/Chisinau': 'ro',
            /* Africa */
            'Africa/Johannesburg': 'af',
            'Africa/Lagos': 'yo',
            'Africa/Nairobi': 'sw',
            'Africa/Dar_es_Salaam': 'sw',
            'Africa/Addis_Ababa': 'am',
            'Africa/Cairo': 'ar',
            'Africa/Casablanca': 'ar',
            'Africa/Tunis': 'ar',
            'Africa/Algiers': 'ar',
            'Africa/Accra': 'en',
            'Africa/Abidjan': 'fr',
            'Africa/Dakar': 'fr',
            /* Americas */
            'America/Sao_Paulo': 'pt',
            'America/Bogota': 'es',
            'America/Lima': 'es',
            'America/Santiago': 'es',
            'America/Buenos_Aires': 'es',
            'America/Mexico_City': 'es',
            'America/Caracas': 'es',
            'America/Montevideo': 'es',
            'America/Asuncion': 'es',
            'America/Guayaquil': 'es',
            'America/La_Paz': 'es',
            'America/Managua': 'es',
            'America/Guatemala': 'es',
            'America/Tegucigalpa': 'es',
            'America/El_Salvador': 'es',
            'America/Costa_Rica': 'es',
            'America/Panama': 'es',
            'America/Santo_Domingo': 'es',
            'America/Port-au-Prince': 'ht',
            /* Oceania */
            'Pacific/Port_Moresby': 'en',
            'Pacific/Fiji': 'en',
            'Pacific/Apia': 'en',
        };

        let etCurrentLang = localStorage.getItem('et_lang') || 'en';
        let etPickerOpen = false;
        let etCombo = null;

        /* Called by Google's script as callback */
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');

            /* Wait for combo to be ready then auto-detect */
            etWaitForCombo(function (combo) {
                etCombo = combo;
                etAutoDetect();
                etStartCleanup();
            });
        }

        /* Poll until Google's select element exists */
        function etWaitForCombo(cb) {
            let tries = 0;
            const t = setInterval(function () {
                const combo = document.querySelector('#google_translate_element .goog-te-combo');
                if (combo && combo.options.length > 1) {
                    clearInterval(t);
                    cb(combo);
                }
                if (++tries > 40) clearInterval(t);
            }, 250);
        }

        /* 3-layer auto detect */
        function etAutoDetect() {
            /* 1. Stored preference */
            const stored = localStorage.getItem('et_lang');
            if (stored && stored !== 'en') { etApplyLang(stored); return; }

            /* 2. Browser language */
            const nav = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
            if (nav !== 'en' && etLangExists(nav)) { etApplyLang(nav); return; }

            /* 3. Timezone heuristic */
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const lang = ET_TZ_MAP[tz];
                if (lang && lang !== 'en') { etApplyLang(lang); return; }
            } catch (e) { }
        }

        function etLangExists(code) {
            if (!etCombo) return false;
            return !!(etCombo.querySelector('option[value="' + code + '"]'));
        }

        /* Core translation trigger — uses cookie method which is more reliable */
        function etApplyLang(code) {
            if (code === 'en') {
                /* Restore to English */
                etSetCookie('googtrans', '/en/en');
                etCurrentLang = 'en';
                localStorage.setItem('et_lang', 'en');
                etUpdateButtonLabel('en');
                location.reload();
                return;
            }

            /* Set the googtrans cookie — this is what Google Translate actually reads */
            etSetCookie('googtrans', '/en/' + code);
            etCurrentLang = code;
            localStorage.setItem('et_lang', code);
            etUpdateButtonLabel(code);

            /* Also trigger via the combo select as a secondary signal */
            if (etCombo) {
                const opt = etCombo.querySelector('option[value="' + code + '"]');
                if (opt) {
                    etCombo.value = code;
                    etCombo.dispatchEvent(new Event('change'));
                    etKillBanner();
                    setTimeout(etCleanDOM, 800);
                    return;
                }
            }

            /* Fallback: reload with cookie set (Google picks it up on load) */
            location.reload();
        }

        function etSetCookie(name, value) {
            const d = new Date();
            d.setFullYear(d.getFullYear() + 1);
            document.cookie = name + '=' + value + '; expires=' + d.toUTCString() + '; path=/';
            /* Also set on domain root for subdomain coverage */
            try {
                const host = '.' + location.hostname.split('.').slice(-2).join('.');
                document.cookie = name + '=' + value + '; expires=' + d.toUTCString() + '; path=/; domain=' + host;
            } catch (e) { }
        }

        function etUpdateButtonLabel(code) {
            const found = ET_LANGS.find(function (l) { return l.code === code; });
            const label = document.getElementById('et-lang-label');
            if (label && found) {
                label.textContent = found.flag + ' ' + found.name;
            }
        }

        /* ---- Picker open/close ---- */
        function etTogglePicker() {
            etPickerOpen ? etClosePicker() : etOpenPicker();
        }

        function etOpenPicker() {
            const picker = document.getElementById('et-lang-picker');
            if (!picker) return;
            picker.innerHTML = '';

            ET_LANGS.forEach(function (l) {
                const item = document.createElement('div');
                item.className = 'et-lang-item' + (l.code === etCurrentLang ? ' et-active' : '');
                item.innerHTML =
                    '<span class="et-item-flag">' + l.flag + '</span>' +
                    '<span class="et-item-name">' + l.name + '</span>' +
                    '<span class="et-item-native">' + l.native + '</span>';
                item.onclick = function () { etApplyLang(l.code); etClosePicker(); };
                picker.appendChild(item);
            });

            picker.style.display = 'block';
            const overlay = document.getElementById('et-lang-overlay');
            if (overlay) overlay.style.display = 'block';
            etPickerOpen = true;
        }

        function etClosePicker() {
            const picker = document.getElementById('et-lang-picker');
            const overlay = document.getElementById('et-lang-overlay');
            if (picker) picker.style.display = 'none';
            if (overlay) overlay.style.display = 'none';
            etPickerOpen = false;
        }

        /* ---- DOM cleanup ---- */
        function etStartCleanup() {
            etCleanDOM();

            const obs = new MutationObserver(function () {
                if (etCleanRunning) return; /* prevent re-entrant loop */
                etCleanRunning = true;
                requestAnimationFrame(function () {
                    etCleanDOM();
                    etCleanRunning = false;
                });
            });

            obs.observe(document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }

        /* Aggressive banner killer — runs repeatedly for 5 seconds after translate */
        function etKillBanner() {
            let count = 0;
            const t = setInterval(function () {
                etCleanDOM();
                if (++count > 20) clearInterval(t);
            }, 250);
        }

        function etCleanDOM() {
            /* Kill all Google Translate iframes and UI elements */
            document.querySelectorAll(
                '.goog-te-banner-frame,' +
                'iframe.goog-te-banner-frame,' +
                '.goog-te-balloon-frame,' +
                '.goog-te-menu-frame,' +
                '#goog-gt-tt,' +
                '.goog-te-spinner-pos,' +
                '.VIpgJd-ZVi9od-ORHb-OEVmcd,' +   /* ← the actual banner iframe class */
                '.VIpgJd-ZVi9od-aZ2wEe-wOHMyf'    /* ← the spinner overlay */
            ).forEach(function (el) { el.remove(); });

            /* Force body position — write only if wrong to avoid mutation loop */
            if (document.body.style.top !== '0px') {
                document.body.style.setProperty('top', '0px', 'important');
            }
            if (document.body.style.position === 'relative') {
                document.body.style.position = 'static';
            }
            document.body.style.marginTop = '0';

            /* Unwrap <font> tags that break <strong> */
            document.querySelectorAll('font').forEach(function (font) {
                if (!font.parentNode) return;
                const frag = document.createDocumentFragment();
                while (font.firstChild) frag.appendChild(font.firstChild);
                font.parentNode.replaceChild(frag, font);
            });

            /* Kill highlight styling */
            document.querySelectorAll('.goog-text-highlight').forEach(function (el) {
                el.style.background = 'none';
                el.style.boxShadow = 'none';
            });
        }

        /* Unwrap <font> tags */
        document.querySelectorAll('font').forEach(function (font) {
            if (!font.parentNode) return;
            const frag = document.createDocumentFragment();
            while (font.firstChild) frag.appendChild(font.firstChild);
            font.parentNode.replaceChild(frag, font);
        });

        document.querySelectorAll('.goog-text-highlight').forEach(function (el) {
            el.style.background = 'none';
            el.style.boxShadow = 'none';
        });

        /* Close picker on Escape key */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') etClosePicker();
        });
