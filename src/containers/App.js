/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import MoviesResult from './MoviesResult';
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';
import getMoviesAction from '../store/actions/moviesActions';
import { getAllMovies } from '../store/selectors';

class App extends PureComponent {

    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render() {
        const { moviesList } = this.props;

        return (
            <>
                <Wrapper>
                    <ErrorBoundary>
                        <Header/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <MoviesResult
                            movies = {moviesList}
                        />
                    </ErrorBoundary>
                </Wrapper>
                <Footer/>
            </>
        );
    }
}

const Wrapper = styled.div`
    background: #555;
`;

App.propTypes = {
    moviesList: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    moviesList: getAllMovies(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies: getMoviesAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

