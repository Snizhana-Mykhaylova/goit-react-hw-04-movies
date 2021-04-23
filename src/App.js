import React, { Suspence, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDatailsPage';
import AppBar from './Components/AppBar';
import routes from './routes';
import Loader from './Components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDatailsPage' /* webpackChunkName: "movies-detail-page" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspence fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.moviesPage} component={MoviesPage} />
        </Switch>
      </Suspence>
    </>
  );
};

export default App;
