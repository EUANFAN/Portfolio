export const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const onReducedMotionChange = (handler) => {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const listener = (e) => handler(e.matches);
  if (mq.addEventListener) mq.addEventListener('change', listener);
  else mq.addListener(listener);
  return () => {
    if (mq.removeEventListener) mq.removeEventListener('change', listener);
    else mq.removeListener(listener);
  };
};
