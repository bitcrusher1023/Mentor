import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllMovies } from '../store/selectors';
import MovieDetails from '../components/MovieDetails';
import ActionBar from '../components/ActionBar';
import MoviesList from '../components/MoviesList';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const movies = useSelector(getAllMovies);

    const getUserById = (movieId) => movies.find(movie => movie.id === movieId);

    const movieDetailsData = getUserById(parseInt(id, 10));

    return (
        <Wrapper>
            <MovieDetails movieData = {movieDetailsData} />
            <MovieContainerWrapper>
                <ActionBar />
                <MoviesList movies={movies}/>
            </MovieContainerWrapper>
            
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
