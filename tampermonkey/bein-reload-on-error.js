// ==UserScript==
// @name         Beinsport reload page on error
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reload page on error "A video playback error has occurred. (1101)"
// @author       Manuel Boillod
// @match        https://connect.beinsports.com
// @grant        none
// ==/UserScript==


// TODO in progress


(function() {
    'use strict';

    function reloadOnError() {
        const hasError = 
            document.getElementsByClassName('gb-id-errors-displays-title')[0].innerText.trim() === "Oups" &&
            document.getElementsByClassName('gb-id-errors-displays-message')[0].innerText.trim() === "A video playback error has occurred. (1101)"
        if (hasError) {
          console.log('error detected - reloading')
          alert('error detected - reloading');
          document.location.reload()
        } else {
          console.log('no error')
        }
    }

    window.setInterval(reloadOnError, 5000);
})();
