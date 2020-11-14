import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';
import Page404 from '../pages/Page404';
import SearchMoviesPage from '../pages/SearchMoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const App = () => {
    return (
        <>
            <ErrorBoundary>
                <Router>
                    <Switch>
                        <Route exact path="/" component={SearchMoviesPage} />
                        <Route exact path="/search" component={SearchMoviesPage} />
                        <Route exact path="/movie/:id" component={MovieDetailsPage} />
                        <Route path="*" component={Page404} />
                        {/* <Route path="*" component={NotFound} /> */}
                    </Switch>
                </Router>
            </ErrorBoundary>
            <Footer/>
        </>
    );
};

export default App;
