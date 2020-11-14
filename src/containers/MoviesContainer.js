import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { requestMovies } from '../store/actions/moviesActions';
import { getAllMovies, getParams } from '../store/selectors';
import MoviesList from '../components/MoviesList';
import NotFound from '../components/NotFound';

// const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesContainer = React.memo(() => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [searchParams, setSearchParams] = useState({
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder:'desc',
        filter: []
    });

    useEffect(() => {
        const search = queryString.parse(location.search);

        if (!!search && search.search && search.search.length > 1) {
            setSearchParams({
                ...searchParams,
                ...search
            });
            dispatch(requestMovies(searchParams));
        }
    }, [dispatch, location]);

    const movies = useSelector(getAllMovies);
    // const params = useSelector(getParams);
    console.log(searchParams);

    // useEffect(() => {
    //     dispatch(requestMovies(searchParams));
    // }, [dispatch, searchParams]);

    return movies.length > 0 ? <MoviesList movies={movies} /> : <NotFound />;
});

export default MoviesContainer;
