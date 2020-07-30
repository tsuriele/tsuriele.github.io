const init = () => {
    bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'logo.json'
    });

    bodymovin.loadAnimation({
        container: document.getElementById('bmMobile'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'logo.json'
    });
};