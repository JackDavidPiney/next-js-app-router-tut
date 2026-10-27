'use client';

import { useEffect, useRef } from 'react';

export default function CursorReactiveWord() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function updateColorPosition(event: PointerEvent) {
      const word = wordRef.current;
      if (!word) return;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (event.clientX + event.clientY) /
            (window.innerWidth + window.innerHeight),
        ),
      );
      const segment = Math.min(2, Math.floor(progress * 3));
      const segmentProgress = (progress * 3 - segment) * 100;

      word.dataset.colorSegment = String(segment);
      word.style.setProperty('--cursor-color-mix', `${segmentProgress}%`);
    }

    window.addEventListener('pointermove', updateColorPosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener('pointermove', updateColorPosition);
    };
  }, []);

  return (
    <span ref={wordRef} className="home-restyle-word">
      restyle
    </span>
  );
}
