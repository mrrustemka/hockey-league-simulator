import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './components/Game';
import PlayOff from './components/play-off/PlayOff';
import Start from './components/Start';
import Footer from './components/Footer';
import './styles/App.css';
import Team from './components/Team';

const router = createBrowserRouter([
  {
    path: '/hockey-league-simulator',
    element: (
      <main id='main-content' className='app__div'>
        <Start />
      </main>
    )
  },
  {
    path: '/hockey-league-simulator/season',
    element: (
      <main id='main-content' className='app__div'>
        <Game />
      </main>
    )
  },
  {
    path: '/hockey-league-simulator/season/playoff',
    element: (
      <main id='main-content' className='app__div'>
        <PlayOff />
      </main>
    )
  },
  {
    path: '/hockey-league-simulator/season/team/:teamId',
    element: (
      <main id='main-content' className='app__div'>
        <Team />
      </main>
    )
  }
]);

const App: FC = () => (
  <div className='app'>
    <a href='#main-content' className='skip-link'>
      Skip to main content
    </a>
    <RouterProvider router={router} />
    <Footer />
  </div>
);

export default App;
