/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { moviesData, filtersData } from '../data';
import Header from '../components/Header';
import MoviesResult from './MoviesResult';
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';

class App extends PureComponent {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        searchValue: '',
        sortValue: 'date',
        filters: filtersData,
        all: true,
        movies: moviesData,
        defaultMoviesData: moviesData
    }

    addMovie = (movieData) => {
        const { movies } = this.state;

        this.setState({
            movies: [...movies, movieData]
        });
    }

    searchOnChange = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    handleSearch = () => {
        const { movies, searchValue, defaultMoviesData } = this.state;

        this.setState({
            movies: searchValue
                ? movies.filter(({ title }) => (title.toLowerCase().includes(searchValue.toLowerCase())))
                : defaultMoviesData,
        });
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    }

    sortingOnChange = (event) => {
        this.setState({
            sortValue: event.target.value,
        });
    };
    
    setAll = () => {
        const { filters, defaultMoviesData } = this.state;

        this.setState({
            all: true,
            filters: filters.map(filter => ({ ...filter, status: false })),
            movies: defaultMoviesData
        });
    }

    setFilter = (e) => {
        const { filters } = this.state;

        e.preventDefault();
        const { index } = e.currentTarget.dataset;
       
        filters[index].status = !filters[index].status;

        this.setState({
            filters
        });
        
        this.updateFilters();
    }

    updateFilters() {
        const { filters } = this.state;
        const allFiltersTrue = filters.every(filter => filter.status === true);
        const allFiltersFalse = filters.every(filter => filter.status === false);
        
        if (allFiltersTrue || allFiltersFalse) {
            this.setAll();
        } else {
            this.setState({
                all: false
            });
            this.updateMovies();
        }
    }

    updateMovies() {
        const { filters, searchValue, movies } = this.state;
        const newMovies = [];

        const oldMovies = searchValue ? movies : moviesData;
        
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
        const {filters, searchValue, movies, all, sortValue} = this.state;

        return (
            <>
                <Wrapper>
                    <ErrorBoundary>
                        <Header
                            searchValue = {searchValue} 
                            searchOnChange = {this.searchOnChange}
                            handleKeyDown = {this.handleKeyDown}
                            handleSearch = {this.handleSearch}
                            addMovie = {this.addMovie}
                        />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <MoviesResult
                            filters = {filters}
                            all = {all}
                            onClickAll={this.setAll}
                            onClick={this.setFilter}
                            movies = {movies}
                            sortValue = {sortValue}
                            sortingOnChange={this.sortingOnChange}
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

export default App;
