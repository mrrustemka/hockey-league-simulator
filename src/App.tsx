import { FC } from "react";
import "./App.css";
import Game from "./Components/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayOff from "./Components/Play-off/PlayOff";
import Start from "./Components/Start";
import Footer from "./Components/Footer";

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
