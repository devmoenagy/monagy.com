import { useEffect } from "react";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
