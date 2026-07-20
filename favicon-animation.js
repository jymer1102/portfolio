window.addEventListener('DOMContentLoaded', () => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) return;

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = favicon.href;

    img.onload = () => {
        function forceAnimation() {
            ctx.clearRect(0, 0, 32, 32);
            ctx.drawImage(img, 0, 0, 32, 32);
            favicon.href = canvas.toDataURL('image/png');
            requestAnimationFrame(forceAnimation);
        }
        forceAnimation();
    };
});
