import {
  DarkTheme,
  LightTheme,
  ThemeProvider,
  useMediaQuery,
} from "@pankod/refine-mui";
import { parseCookies, setCookie } from "nookies";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import Chart2 from "@components/charts/chart2";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const systemTheme = useMediaQuery(`(prefers-color-scheme: dark)`);

  useEffect(() => {
    if (isMounted) {
      setMode(parseCookies()["theme"] || (systemTheme ? "light" : "dark"));
    }
  }, [isMounted, systemTheme]);

  const toggleTheme = () => {
    const nextTheme = mode === "light" ? "dark" : "light";

    setMode(nextTheme);
    setCookie(null, "theme", nextTheme);
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: toggleTheme,
        mode,
      }}
    >
      <ThemeProvider theme={mode === "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
