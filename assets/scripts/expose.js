// expose.js
function init() {
    const hornSelect = document.getElementById('horn-select');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const audioElement = document.querySelector('audio');
    const playButton = document.querySelector('button');
    const hornImage = document.querySelector('#expose img');

    const jsConfetti = new JSConfetti();

    function updateHornImage() {
        if (hornSelect && hornImage && audioElement) {
            const selectedHorn = hornSelect.value;
            if (selectedHorn === 'select') {
                hornImage.src = 'assets/images/no-image.png';
                audioElement.src = '';
            } else {
                hornImage.src = `assets/images/${selectedHorn}.svg`;
                audioElement.src = `assets/audio/${selectedHorn}.mp3`;
            }
        }
    }

    function updateVolumeIcon() {
        if (volumeSlider && volumeIcon && audioElement) {
            const volume = volumeSlider.value;
            if (volume === '0') {
                volumeIcon.src = 'assets/icons/volume-level-0.svg';
            } else if (volume < 33) {
                volumeIcon.src = 'assets/icons/volume-level-1.svg';
            } else if (volume < 67) {
                volumeIcon.src = 'assets/icons/volume-level-2.svg';
            } else {
                volumeIcon.src = 'assets/icons/volume-level-3.svg';
            }
            audioElement.volume = volume / 100;
        }
    }

    function playSound() {
        if (audioElement && hornSelect) {
            if (hornSelect.value !== 'select') {
                audioElement.play();
                if (hornSelect.value === 'party-horn') {
                    jsConfetti.addConfetti();
                }
            }
        }
    }

    if (hornSelect && volumeSlider && playButton) {
        hornSelect.addEventListener('change', updateHornImage);
        volumeSlider.addEventListener('input', updateVolumeIcon);
        playButton.addEventListener('click', playSound);
    }

    // Initialize default values
    updateHornImage();
    updateVolumeIcon();

    // Check if no horn is selected on startup
    if (hornSelect && hornSelect.value === 'select') {
        hornImage.src = 'assets/images/no-image.png';
        audioElement.src = '';
    }
}

document.addEventListener('DOMContentLoaded', init);