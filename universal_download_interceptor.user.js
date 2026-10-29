// ==UserScript==
// @name         Universal Download Redirector for Android
// @namespace    https://github.com/nullmahfuz/
// @version      2.1
// @description  Intercept direct download links in Chromium browsers and show Android app chooser for all download managers
// @author       Md. Mahfuz Hasan
// @license      MIT
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const targetExtensions = [
        'zip', 'rar', '7z', 'tar', 'gz', 'iso',
        'apk', 'xapk', 'apkm',
        'mp4', 'mkv', 'webm', 'avi', 'mov', '3gp',
        'mp3', 'aac', 'flac', 'm4a', 'wav', 'ogg',
        'pdf', 'docx', 'xlsx', 'pptx', 'epub',
        'exe', 'msi', 'bin', 'img', 'torrent'
    ];

    const regexPattern = new RegExp(`\\.(${targetExtensions.join('|')})(\\?.*)?$`, 'i');

    function openGlobalChooser(url) {
        try {
            const absoluteUrl = new URL(url, window.location.href).href;
            const strippedUrl = absoluteUrl.replace(/^https?:\/\//i, '');
            const scheme = absoluteUrl.startsWith('https') ? 'https' : 'http';

   
            const intentUri = `intent://${strippedUrl}#Intent;scheme=${scheme};action=android.intent.action.VIEW;end`;

            window.location.href = intentUri;
        } catch (err) {
            console.error('Download Chooser Error:', err);
        }
    }

    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        const hasDownloadAttr = anchor.hasAttribute('download');

        if (hasDownloadAttr || (href && regexPattern.test(new URL(href, window.location.href).pathname))) {
            e.preventDefault();
            e.stopPropagation();
            openGlobalChooser(anchor.href);
        }
    }, true);

})();
