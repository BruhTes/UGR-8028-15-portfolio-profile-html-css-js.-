document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const seekSlider = document.getElementById('seek-slider');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Update seek slider and time displays
    audioPlayer.addEventListener('timeupdate', () => {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekSlider.value = percent;
        
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    });

    // Update duration when metadata is loaded
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(audioPlayer.duration);
    });

    // Seek functionality
    seekSlider.addEventListener('change', () => {
        const time = (seekSlider.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });

    // Volume functionality
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
        updateVolumeIcon();
    });

    volumeBtn.addEventListener('click', () => {
        if (audioPlayer.volume > 0) {
            audioPlayer.volume = 0;
            volumeSlider.value = 0;
        } else {
            audioPlayer.volume = 1;
            volumeSlider.value = 1;
        }
        updateVolumeIcon();
    });

    // Helper functions
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateVolumeIcon() {
        const volume = audioPlayer.volume;
        if (volume === 0) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else if (volume < 0.5) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
        } else {
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
});