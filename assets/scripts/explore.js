// explore.js

function init() {
    const textToSpeakTextarea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const speakButton = document.querySelector('button');
    const smileImage = document.querySelector('#explore img');

    let voices = [];
    let isSpeaking = false;

    function populateVoiceList() {
        voices = speechSynthesis.getVoices();

        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.appendChild(option);
        });
    }

    function startSpeaking() {
        const text = textToSpeakTextarea.value;
        const selectedVoice = voices.find((voice) => voice.name === voiceSelect.value);

        if (text.trim() !== '' && selectedVoice) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = selectedVoice;

            utterance.onstart = () => {
                isSpeaking = true;
                smileImage.src = 'assets/images/smiling-open.png';
            };

            utterance.onend = () => {
                isSpeaking = false;
                smileImage.src = 'assets/images/smiling.png';
            };

            speechSynthesis.speak(utterance);
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    speakButton.addEventListener('click', startSpeaking);
}

document.addEventListener('DOMContentLoaded', init);