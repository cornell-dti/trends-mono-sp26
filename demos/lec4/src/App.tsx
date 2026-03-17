/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import "./components/styles.css";
import { createContext, useContext, useState } from "react";
import CoursePlan from "./components/CoursePlan";

export type Theme = "light" | "dark";
export const ThemeContext = createContext<Theme>("light");
export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>
        <h1>Lecture 4 Demo</h1>
        <button
          className="themeToggleButton"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
        <CoursePlan />
        {/* <MemoDemo />
        <ContextDemo /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
