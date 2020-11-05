import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovies } from '../store/actions/moviesActions';
import { getAllMovies, getParams } from '../store/selectors';
import MoviesList from '../components/MoviesList';
import NoFound from '../components/NoFound';

const MoviesContainer = () => {
    const dispatch = useDispatch();
    // this selectors must be memoized for exaple with reselect
    // to avoid infinity loop request
    const movies = useSelector(getAllMovies);
    const params = useSelector(getParams);

    useEffect(() => {
        dispatch(requestMovies({ params }));
    }, [dispatch, params]);

    return movies.length > 0 ? <MoviesList movies={movies} /> : <NoFound />;
};

export default MoviesContainer;
