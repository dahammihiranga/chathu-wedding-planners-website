export type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
};

export function calculateCountdown(
  targetDate: string,
  currentTime: number,
): CountdownValues {
  const targetTime = new Date(targetDate).getTime();
  const difference = targetTime - currentTime;

  if (
    Number.isNaN(targetTime) ||
    difference <= 0
  ) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24),
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24,
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60,
  );

  const seconds = Math.floor(
    (difference / 1000) % 60,
  );

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}