(function () {
    const ARROW_KEYS = [
        'ArrowRight', 'ArrowLeft',
        'ArrowUp', 'ArrowDown',
        'KeyK',
        'KeyJ', 'KeyL',
        'KeyM',
        'KeyC',
        'KeyF',
        'KeyT',
        'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
        'Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9',
    ];
    const VIDEO_SELECTOR = 'video';
    const CONTROLS_CLASS_NAME = 'ytp-chrome-bottom';

    const handler = (e) => {
        // isTrusted is the cloned event
        if (!e.isTrusted || !ARROW_KEYS.includes(e.code)) {
            return;
        }

        const video = document.querySelector(VIDEO_SELECTOR);
        const controls = document.getElementsByClassName(CONTROLS_CLASS_NAME)[0];

        if (!video || !controls) {
            return;
        }

        if (document.activeElement.contains(controls)) {
            e.preventDefault();
            const clone = new KeyboardEvent(e.type, e);
            video.dispatchEvent(clone);
        }
    };

    document.addEventListener('keydown', handler, true);
})();
