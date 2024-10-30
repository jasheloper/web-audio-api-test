// AudioContext instance to manipulate our track:
const audioCtx = new AudioContext();

// constants that store references to our <audio>, <button>, and <input> elements
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");


// AudioContext.createMediaElementSource() :: method to create a MediaElementAudioSourceNode representing the source of our audio — the <audio> element will be played from:
const audioSource = audioCtx.createMediaElementSource(audioElement);


// play/pause audio

/*
Note: the play() and pause() methods being used to play and pause the track are not part of the Web Audio API; they are part of the HTMLMediaElement API, which is different but closely-related.
*/

playBtn.addEventListener("click", () => {
    // check if context is in suspended state
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    // if track is stopped, play it
    if (playBtn.getAttribute("class") === "paused") {
        audioElement.play();
        playBtn.setAttribute("class", "playing");
        playBtn.textContent = "Pause";
        // if track is playing, stop it
    } else if (playBtn.getAttribute("class") === "playing") {
        audioElement.pause();
        playBtn.setAttribute("class", "paused");
        playBtn.textContent = "Play";
    }
});

// if track ends
audioElement.addEventListener("ended", () => {
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
});