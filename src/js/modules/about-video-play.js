document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.about__video')) {
        const video = document.querySelector('#about-video');
        const playBtn = document.querySelector('.about__preview-wrapper');

        function toggleVideo() {
            playBtn.style.display = 'none';
            video.play();
        }

        playBtn.addEventListener('click', toggleVideo);
    }
});