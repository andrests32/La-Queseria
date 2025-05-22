import { useState, useEffect } from 'react';

export function usePersistentTimer(initialTime, storageKey = 'offer-timer') {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Solo en cliente
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const { value, timestamp } = JSON.parse(saved);
        const elapsed = Math.floor((Date.now() - timestamp) / 1000);
        return Math.max(0, value - elapsed);
      }
    }
    return initialTime;
  });

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Solo en cliente
    if (typeof window === 'undefined') return;

    if (!isActive || timeLeft <= 0) {
      localStorage.removeItem(storageKey);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem(storageKey, JSON.stringify({
          value: newTime,
          timestamp: Date.now()
        }));
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, storageKey]);

  const resetTimer = (newTime = initialTime) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify({
        value: newTime,
        timestamp: Date.now()
      }));
    }
    setTimeLeft(newTime);
    setIsActive(true);
  };

  return { timeLeft, isActive, setIsActive, resetTimer };
}