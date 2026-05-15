// Web Audio API helper to generate vintage analog tape sound effects and documentary audio simulation

let audioCtx: AudioContext | null = null;
let activeGain: GainNode | null = null;

export function playVintageAudioSimulation(onComplete?: () => void): () => void {
  try {
    // Initialize audio context
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Stop previous if active
    if (activeGain && audioCtx) {
      try {
        activeGain.gain.setValueAtTime(0, audioCtx.currentTime);
      } catch {
        // Ignore disconnect errors
      }
    }

    // Create a rich analog texture: Low hum + soft white noise (tape hiss)
    const bufferSize = audioCtx.sampleRate * 2; // 2 seconds buffer
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Generate noise modulated with subtle crackle
      output[i] = (Math.random() * 2 - 1) * 0.05;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    // Filter the noise to sound like warm tape hiss
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, audioCtx.currentTime);
    filter.Q.setValueAtTime(0.8, audioCtx.currentTime);

    // Subtle low frequency hum representing archive projector/recording reel
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(60, audioCtx.currentTime);

    const oscGain = audioCtx.createGain();
    oscGain.gain.setValueAtTime(0.015, audioCtx.currentTime);

    // Master Gain for smooth fade in/out
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 0.5);
    activeGain = masterGain;

    // Connect nodes
    whiteNoise.connect(filter);
    filter.connect(masterGain);
    osc.connect(oscGain);
    oscGain.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    // Start playback
    whiteNoise.start();
    osc.start();

    // Auto fadeout simulation after 12 seconds
    const timeoutId = setTimeout(() => {
      stop();
      if (onComplete) onComplete();
    }, 12000);

    const stop = () => {
      clearTimeout(timeoutId);
      if (audioCtx && masterGain) {
        try {
          masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
          setTimeout(() => {
            try {
              whiteNoise.stop();
              osc.stop();
              whiteNoise.disconnect();
              osc.disconnect();
            } catch {
              // Node already stopped
            }
          }, 600);
        } catch {
          // Fallback silence
        }
      }
    };

    return stop;
  } catch (e) {
    console.warn("Audio Context not allowed or failed:", e);
    // Fallback stub
    return () => {};
  }
}
