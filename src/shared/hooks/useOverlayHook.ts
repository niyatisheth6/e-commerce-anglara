import { useEffect } from "react";

const useOverlayHook = (isOpen: boolean) => {
  useEffect(() => {
    const rootElement = document.body;
    if (isOpen) {
      rootElement.classList.add("overlay");
    } else {
      rootElement.classList.remove("overlay");
    }
    return () => {
      rootElement.classList.remove("overlay");
    };
  }, [isOpen]);
};

export default useOverlayHook;
