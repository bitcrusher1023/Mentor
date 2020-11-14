import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useSWR from 'swr';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchMovieById } from '../store/actions/moviesActions';
import { getAllMovies} from '../store/selectors';
import MovieDetails from '../components/MovieDetails';
import ActionBar from '../components/ActionBar';
import MoviesList from '../components/MoviesList';
import { API_GATEWAY } from '../store/actions/moviesActions';

const fetcher = url => axios.get(url).then(({ data }) => data);

const MovieDetailsPage = () => {
    const { id } = useParams();
    // useSWR it's a hook for data fetching you can read more about https://github.com/vercel/swr
    const { data, error } = useSWR(`${API_GATEWAY}/${id}`, fetcher);
    // Also you can use redux flow ti request data by movie id from url
    // const dispatch = useDispatch();
    // // const movies = useSelector(getAllMovies);

    // useEffect(() => {
    //     dispatch(fetchMovieById(id));
    // }, [dispatch, id])
    // const getUserById = (movieId) => movies.find(movie => movie.id === movieId);

    // const movieDetailsData = getUserById(parseInt(id, 10));
    if (error) return 'error';

    console.log(data);

    return (
        <Wrapper>
            { data ? <MovieDetails movieData={data} /> : 'loading'}
            {/* In previous tasks we alreade have a container we can use this container here
            and all data nedded in this container will be automatically request base on router params. And this components
            will be independant on that data */}
            {/* <MovieContainerWrapper>
                <ActionBar />
                <MoviesList movies={movies}/>
            </MovieContainerWrapper> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #555;
`;

const MovieContainerWrapper = styled.section`
    font-family: Helvetica, sans-serif;
    background: #232323;
    padding: 0 80px;
`;

export default MovieDetailsPage;
