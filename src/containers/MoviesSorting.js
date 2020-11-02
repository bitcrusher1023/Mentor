import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingValue, sortMovies } from '../store/actions/sortingActions';
import { getAllMovies } from '../store/selectors';
import SortingForm from '../components/SortingForm';

const MoviesSorting = () => {
    const dispatch = useDispatch();

    const movies = useSelector(getAllMovies);

    const moviesSorting = (moviesToSort, sortBy) => {
        let sortedMovies = [];
        if (sortBy === 'release_date') {
            sortedMovies = [...moviesToSort].sort((a, b) => {
                if (new Date(b[sortBy]) < new Date(a[sortBy])) return -1;
                if (new Date(b[sortBy]) > new Date(a[sortBy])) return 1;
                return 0;
            });
        } else {
            sortedMovies = [...moviesToSort].sort((a, b) => {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            });
        }
        return sortedMovies;
    };

    const sortingOnChange = (ev) => {
        const sortBy = ev.target.value;
        const sortedMovies = moviesSorting(movies, sortBy);
        dispatch(setSortingValue(sortBy));
        dispatch(sortMovies(sortedMovies));
    };

    return (
        <SortingForm sortingOnChange={sortingOnChange}/>
    );
};

export default MoviesSorting;
