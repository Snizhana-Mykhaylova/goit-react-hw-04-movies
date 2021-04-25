import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
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
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route path={routes.moviesPage} component={MoviesPage} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
