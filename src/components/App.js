import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { moviesData, filtersData } from './data';
import MoviesResult from './MoviesResult';
import Header from './Header';
import ErrorBoundary from './ErrorBounding';

class App extends PureComponent {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        searchValue: '',
        sortValue: 'date',
        filters: filtersData,
        all: true,
        filteredMovies: [],
        movies: moviesData
    }

    searchOnChange = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    dynamicSearch = () => {
        const { movies, searchValue } = this.state;
        if (!searchValue) return movies;
        return movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

    handleSearch = () => {
        const searchResult = this.dynamicSearch();
        this.setState({ movies: searchResult });
    };

    sortingOnChange = (event) => {
        this.setState({
            sortValue: event.target.value,
        });
    };

    setAll = () => {
        const { filters } = this.state;
        filters.forEach(filter => {
            filter.status = false;
        });
        
        this.setState({
            all: true,
            filters,
            movies: moviesData
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

    updateFilters(){
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
        const { filters } = this.state;
        const newMovies = [];
        
        moviesData.forEach((movie) => { 
            filters.forEach((filter)=> {
                if((movie.description === filter.name) && (filter.status === true)) {
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
            <Wrapper>
                <Header
                    searchValue = {searchValue} 
                    searchOnChange = {this.searchOnChange}
                    handleSearch = {this.handleSearch}
                />
                <ErrorBoundary>
                    <MoviesResult
                        filters = {filters}
                        all = {all}
                        onClickAll={this.setAll}
                        onClick={this.setFilter}
                        movies = {movies}
                        sortValue = {sortValue}
                        sortingOnChange={this.sortingOnChange}
                        // filteredMovies = {filteredMovies}
                    />
                </ErrorBoundary>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    background: #555;
`;

export default App;