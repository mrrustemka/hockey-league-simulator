import { FC, ReactNode, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import Game from './components/Game';
import PlayOff from './components/play-off/PlayOff';
import Start from './components/Start';
import Footer from './components/Footer';
import './styles/App.css';
import Team from './components/Team';

const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/hockey-league-simulator',
    element: (
      <PageWrapper>
        <main id='main-content' className='app__div' tabIndex={-1}>
          <Start />
        </main>
      </PageWrapper>
    )
  },
  {
    path: '/hockey-league-simulator/season',
    element: (
      <PageWrapper>
        <main id='main-content' className='app__div' tabIndex={-1}>
          <Game />
        </main>
      </PageWrapper>
    )
  },
  {
    path: '/hockey-league-simulator/season/playoff',
    element: (
      <PageWrapper>
        <main id='main-content' className='app__div' tabIndex={-1}>
          <PlayOff />
        </main>
      </PageWrapper>
    )
  },
  {
    path: '/hockey-league-simulator/season/team/:teamId',
    element: (
      <PageWrapper>
        <main id='main-content' className='app__div' tabIndex={-1}>
          <Team />
        </main>
      </PageWrapper>
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
