import { useCallback, useState } from "react";

const useThrottle = (): ((callback: () => void, delay: number) => void) => {
  const [wating, setWating] = useState<boolean>(false);

  const throttle = useCallback(
    (callback: () => void, delay: number): void => {
      if (wating) return;
      if (!wating) {
        setWating(true);

        setTimeout(() => {
          callback();
          setWating(false);
        }, delay);
      }
    },
    [wating]
  );

  return throttle;
};

export default useThrottle;
