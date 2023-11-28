import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import GamePlayOff from './components/GamePlayOff';
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Game />} />
          <Route path="/play-off" element={<GamePlayOff />} />
        </Route>
      </Routes>
      <Header />
      <Game />
    </BrowserRouter>
  </div>
);

export default App;
