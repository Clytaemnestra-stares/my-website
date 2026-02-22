let audioCtx;
let osc;

function initAudio() {
	if (!audioCtx) {
		audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		console.log("Audio context created");

		osc = audioCtx.createOscillator();
		osc.type = "sine";
		osc.frequency.value = 220;

		osc.connect(audioCtx.destination);
		osc.start();
	}
}

document.addEventListener("click", initAudio, { once: true });
