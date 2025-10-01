
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playLargeBtn = document.getElementById('playLargeBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
    const videoContainer = document.querySelector('.video-container');
    const videoOverlay = document.getElementById('videoOverlay');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    if (!video) return;

   
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function togglePlay() {
        if (video.paused) {
            video.play();
            videoContainer.classList.add('playing');
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            videoContainer.classList.remove('playing');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);
    playLargeBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);

    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${progress}%`;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
    });


    video.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(video.duration);
    });

    const progressContainer = document.querySelector('.video-progress');
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    video.addEventListener('ended', () => {
        videoContainer.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        video.currentTime = 0;
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement !== playPauseBtn) {
            e.preventDefault();
            togglePlay();
        }
    });
});


