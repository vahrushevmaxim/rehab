document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.about__video')) {
        const video = document.querySelector('.about__video source');
        const playBtn = document.querySelector('.about__preview-wrapper');

        function toggleVideo() {
            if (video.paused) {
                video.play();
                playBtn.style.dispay = 'block';
            } else {
                video.pause();
                playBtn.style.dispay = 'none';
            }
        }

        playBtn.addEventListener('click', toggleVideo);
    }
});