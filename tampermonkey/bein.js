// ==UserScript==
// @name         Beinsport hide cursor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide cursor after 5s idle
// @author       Manuel Boillod
// @match        https://connect.beinsports.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        document.body.style.cursor = "none";
        cursorVisible = false;
    }

    document.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            document.body.style.cursor = "default";
            cursorVisible = true;
        }
        mouseTimer = window.setTimeout(disappearCursor, 5000);
    };
})();
