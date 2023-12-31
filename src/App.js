import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  const Home = () => {
    return (
      <>
        <About />
        <Experience />
        <Projects />
        <Achievements />
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/experience"
          element={
            <div
              style={{
                minHeight: "75vh",
              }}
            >
              <Experience />
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />

        <Route
          path="/achievements"
          element={
            <div
              style={{
                minHeight: "75vh",
              }}
            >
              <Achievements />
            </div>
          }
        />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
