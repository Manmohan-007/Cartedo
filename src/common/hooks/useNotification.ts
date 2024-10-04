import { useCallback } from "react";
import { toast } from "react-toastify";

export const useNotification = () => {
  const successNotification = useCallback((msg: string) => {
    return toast.success(msg);
  }, []);

  const infoNotification = useCallback((msg: string) => {
    return toast.info(msg);
  }, []);

  const errorNotification = useCallback((msg: string) => {
    return toast.error(msg);
  }, []);

  const warningNotification = useCallback((msg: string) => {
    return toast.warning(msg);
  }, []);

  return {
    successNotification,
    infoNotification,
    errorNotification,
    warningNotification,
  };
};
