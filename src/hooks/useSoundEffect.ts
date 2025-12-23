import { useCallback, useRef } from "react";

// Crisp metallic sci-fi activation sound
export const useSoundEffect = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playHoverSound = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      // Master output with compression for punch
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-20, now);
      compressor.ratio.setValueAtTime(8, now);
      compressor.connect(ctx.destination);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.25, now);
      masterGain.connect(compressor);

      // Crisp metallic ping - high frequency sine with fast attack
      const ping = ctx.createOscillator();
      const pingGain = ctx.createGain();
      ping.type = "sine";
      ping.frequency.setValueAtTime(2800, now);
      ping.frequency.exponentialRampToValueAtTime(1400, now + 0.15);
      pingGain.gain.setValueAtTime(0.6, now);
      pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      ping.connect(pingGain);
      pingGain.connect(masterGain);
      ping.start(now);
      ping.stop(now + 0.15);

      // Metallic shimmer - triangle wave harmonic
      const shimmer = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmer.type = "triangle";
      shimmer.frequency.setValueAtTime(4200, now);
      shimmer.frequency.exponentialRampToValueAtTime(2100, now + 0.1);
      shimmerGain.gain.setValueAtTime(0.15, now);
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      shimmer.connect(shimmerGain);
      shimmerGain.connect(masterGain);
      shimmer.start(now);
      shimmer.stop(now + 0.1);

      // Sub bass thump for weight
      const bass = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bass.type = "sine";
      bass.frequency.setValueAtTime(100, now);
      bass.frequency.exponentialRampToValueAtTime(60, now + 0.08);
      bassGain.gain.setValueAtTime(0.5, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      bass.connect(bassGain);
      bassGain.connect(masterGain);
      bass.start(now);
      bass.stop(now + 0.08);

    } catch (error) {
      // Silent fail
    }
  }, []);

  return { playHoverSound };
};
