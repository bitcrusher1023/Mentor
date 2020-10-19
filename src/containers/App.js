/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moviesData, filtersData } from '../data';
import Header from '../components/Header';
import MoviesResult from './MoviesResult';
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';
import getMoviesAction from '../actions/moviesActions';
import { getAllMovies } from '../selectors';

class App extends PureComponent {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        filters: filtersData,
        movies: moviesData,
    }

    componentDidMount() {
        const {getMovies} = this.props;
        getMovies();
    }

    editMovie = (movieData) => {
        const { movies } = this.state;
        const index = movies.findIndex(movie => movie.id === movieData.id);
        const newMovies = [...movies];
        newMovies.splice(index, 1, movieData);

        this.setState({
            movies: newMovies
        });
    }

    updateMovies() {
        const { filters } = this.state;
        const newMovies = [];

        const oldMovies = moviesData;
        
        oldMovies.forEach((movie) => { 
            filters.forEach((filter)=> {
                if((movie.genre === filter.name) && (filter.status === true)) {
                    newMovies.push(movie);
                }
            });
        });

        this.setState({
            movies: newMovies
        });
    }

    render() {
        const { movies2 } = this.props;
        // const { movies2 } = this.props.getMovies();

        return (
            <>
                <Wrapper>
                    <ErrorBoundary>
                        <Header/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <MoviesResult
                            movies = {movies2}
                            editMovie = {this.editMovie}
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

const mapStateToProps = state => ({
    movies2: getAllMovies(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getMovies: getMoviesAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

