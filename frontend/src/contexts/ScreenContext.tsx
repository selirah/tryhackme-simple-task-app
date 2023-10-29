import {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useCallback
} from "react";

type ScreenTypes = "mobile" | "desktop";

type Screen = {
  screen: ScreenTypes;
};

const ScreenContext = createContext<Screen | null>(null);

const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [screen, setScreen] = useState<ScreenTypes>("desktop");

  const handleLayout = useCallback(() => {
    if (window.innerWidth >= 320 && window.innerWidth <= 768) {
      setScreen("mobile");
    } else if (window.innerWidth >= 769) {
      setScreen("desktop");
    }
  }, [setScreen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleLayout();
    }
  }, [handleLayout]);

  useEffect(() => {
    window.addEventListener("resize", handleLayout);

    return () => {
      window.removeEventListener("resize", handleLayout);
    };
  }, [screen, handleLayout]);

  const value = {
    screen
  };

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenProvider };
