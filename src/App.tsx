import { FC } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayOff from "./components/play-off/PlayOff";
import Start from "./components/Start";

const router = createBrowserRouter([
  {
    path: "hockey-league-simulator",
    element: (
      <div>
        <Start />
      </div>
    )
  },
  {
    path: "hockey-league-simulator/season",
    element: (
      <div>
        <Game />
      </div>
    )
  },
  {
    path: "hockey-league-simulator/season/playoff",
    element: (
      <div>
        <PlayOff />
      </div>
    )
  }
]);

const App: FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
