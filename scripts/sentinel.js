var tryCount = 0;
var minimalUserResponseInMiliseconds = 200;

function check() { 
    console.clear();

    var before = new Date().getTime();
    debugger;
    var after = new Date().getTime();

    if (after - before > minimalUserResponseInMiliseconds) { 
        self.location.replace(
            window.location.protocol + 
            window.location.href.substring(window.location.protocol.length)
        );  
    } 

    setTimeout(check, 100);
}

check();

window.onload = function () { 

    // ✅ Allow context menu for input & textarea (needed for mobile paste)
    document.addEventListener("contextmenu", function (e) { 
        const tag = e.target.tagName.toLowerCase();

        if (tag === "input" || tag === "textarea") {
            return true; // allow paste menu
        }

        e.preventDefault(); // block elsewhere if needed
    }, false);

    document.addEventListener("keydown", function (e) {

        // Allow paste explicitly (Ctrl+V / Cmd+V)
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 86) {
            return true;
        }

        // Block DevTools shortcuts
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { 
            disabledEvent(e);
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { 
            disabledEvent(e);
        }

        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) { 
            disabledEvent(e);
        }

        if (e.ctrlKey && e.keyCode == 85) { 
            disabledEvent(e);
        }

        if (e.keyCode == 123) { 
            disabledEvent(e);
        }

    }, false);

    function disabledEvent(e) { 
        if (e.stopPropagation) { 
            e.stopPropagation();
        } else if (window.event) { 
            window.event.cancelBubble = true;
        } 
        e.preventDefault();
        return false;
    }
};
