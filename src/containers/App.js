/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import styled from 'styled-components';
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';

// import MoviesFilter from './MoviesFilter';
// import MoviesSorting from './MoviesSorting';
// import MoviesContainer from './MoviesContainer';
// import Header from './Header';
import NotFound from '../components/NotFound';
import Page404 from '../pages/Page404';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
        <>
            {/* <Wrapper> */}
                {/* <ErrorBoundary>
                    <Header/>
                </ErrorBoundary> */}
                <ErrorBoundary>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="*" component={Page404} />
                            {/* <Route path="*" component={NotFound} /> */}
                        </Switch>
                    </Router>
                </ErrorBoundary>
            {/* </Wrapper> */}
            <Footer/>
        </>
    );
};

// const Wrapper = styled.div`
//     background: #555;
// `;

export default App;
