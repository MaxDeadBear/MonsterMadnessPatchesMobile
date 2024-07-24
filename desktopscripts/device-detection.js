(function() {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function loadCSS(filename) {
        var link = document.createElement('link');
        link.href = filename;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    if (isMobile()) {
        // Load mobile CSS
        loadCSS('./mobilecss/mobile-styles.css');
    } else {
        // Load desktop CSS
        loadCSS('./desktopcss/styles.css');
    }
})();
</script>