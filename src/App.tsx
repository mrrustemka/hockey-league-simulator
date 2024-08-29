import React, { FC } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PlayOff from "./components/play-off/PlayOff";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Game />
      </div>
    ),
  },
  {
    path: "playoff",
    element: <div><PlayOff /></div>,
  },
]);

const App: FC = () => (
  <div className="App">
    <Header />
    <RouterProvider router={router} />
  </div>
);

export default App;