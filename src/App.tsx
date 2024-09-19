import { FC } from "react";
import "./App.css";
import Game from "./components/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayOff from "./components/play-off/PlayOff";
import Start from "./components/Start";
import Footer from "./components/Footer";
// import { Footer } from "antd/es/layout/layout";

const router = createBrowserRouter([
  {
    path: "hockey-league-simulator",
    element: (
      <div className="app__div">
        <Start />
      </div>
    )
  },
  {
    path: "hockey-league-simulator/season",
    element: (
      <div className="app__div">
        <Game />
      </div>
    )
  },
  {
    path: "hockey-league-simulator/season/playoff",
    element: (
      <div className="app__div">
        <PlayOff />
      </div>
    )
  }
]);

const App: FC = () => (
  <div className="app">
    <RouterProvider router={router} />
    <Footer />
  </div>
);

export default App;
