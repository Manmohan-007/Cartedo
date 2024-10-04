import { useCallback } from "react";

export const useLocalStorage = () => {
  const get = useCallback((key: string): any => {
    try {
      let localData = localStorage.getItem(key);
      if (localData) {
        try {
          localData = JSON.parse(localData);
        } catch (err) {
          // do nothing
        }
      }
      return localData;
    } catch (err) {
      return null;
    }
  }, []);

  const set = useCallback(
    (key: string, value: any) => {
      try {
        const localData: any = get(key);
        let localValue = {
          ...localData,
          ...value,
        };
        if (typeof value === "object") {
          localValue = JSON.stringify(localValue);
        }
        localStorage.setItem(key, localValue);
      } catch (err) {
        // do nothing
      }
    },
    [get]
  );

  return { getLocalStorage: get, setLocalStorage: set };
};
