import { useCallback, useRef } from "react";

// Web Audio API-based sci-fi hover sound - digital scan effect
export const useSoundEffect = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playHoverSound = useCallback(() => {
    try {
      // Create or reuse AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      // Create a more complex sci-fi sound with multiple layers
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.setValueAtTime(0.12, now);

      // Layer 1: Digital blip - square wave for that digital feel
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "square";
      osc1.frequency.setValueAtTime(1800, now);
      osc1.frequency.exponentialRampToValueAtTime(2400, now + 0.03);
      osc1.frequency.exponentialRampToValueAtTime(1600, now + 0.06);
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.3, now + 0.01);
      gain1.gain.linearRampToValueAtTime(0, now + 0.08);
      osc1.connect(gain1);
      gain1.connect(masterGain);
      osc1.start(now);
      osc1.stop(now + 0.08);

      // Layer 2: Low frequency pulse for depth
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(150, now);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.1);
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.4, now + 0.02);
      gain2.gain.linearRampToValueAtTime(0, now + 0.1);
      osc2.connect(gain2);
      gain2.connect(masterGain);
      osc2.start(now);
      osc2.stop(now + 0.1);

      // Layer 3: High frequency shimmer
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(3000, now);
      osc3.type = "sawtooth";
      osc3.frequency.setValueAtTime(4000, now);
      osc3.frequency.exponentialRampToValueAtTime(6000, now + 0.05);
      gain3.gain.setValueAtTime(0, now);
      gain3.gain.linearRampToValueAtTime(0.08, now + 0.01);
      gain3.gain.linearRampToValueAtTime(0, now + 0.06);
      osc3.connect(filter);
      filter.connect(gain3);
      gain3.connect(masterGain);
      osc3.start(now);
      osc3.stop(now + 0.06);

    } catch (error) {
      // Silently fail if audio is not supported
    }
  }, []);

  return { playHoverSound };
};
