import { useCallback, useEffect } from "react";

export const useOutsideClick = (ref: any, cb: any) => {
  const handleClick = useCallback(
    (e: any) => {
      if (ref?.current && !ref?.current?.contains(e.target)) {
        cb();
      }
    },
    [cb, ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClick]);
};
