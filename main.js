// ==UserScript==
// @name     _Redirecy jump.bdimg.com to tieba.baidu.com
// @match    *://jump.bdimg.com/*
// @run-at   document-start
// @grant    none
// @description https://github.com/SodaWithoutSparkles/baidu-tieba-redir/
// @version  0.1.0
// ==/UserScript==

// redirect if path starts with f?kw=*
if (/^\/f/.test (location.pathname) ) {
    if (/^\?kw\=/.test (location.search) ) {
        var newHost = location.host.replace (/^jump\.bdimg/, "tieba.baidu");
        var plainPath = location.pathname;
        var newURL = location.protocol + "//" +
            newHost +
            plainPath +
            location.search +
            location.hash
        ;
        location.replace (newURL);
    }
};
