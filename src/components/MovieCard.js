/* eslint-disable react/forbid-prop-types */
import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieAction from '../containers/MovieAction';
import MovieDetails from '../containers/MovieDetails';

const MovieCard = (props) => {
    const { movie, title, genres, date, image } = props;

    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!isHovered);
    };

    const [showMovieDetails, setShowMovieDetails] = useState(false);

    const handleShowMovieDetails = useCallback(() => {
        setShowMovieDetails(!showMovieDetails);
    }, [showMovieDetails]);

    const [movieDetailsData, setMovieDetails] = useState(null);

    const handleClick = useCallback(item => {
        setMovieDetails(item);
    }, [movie]);

    const handleMovieDetails = () => {
        handleClick(movie);
        handleShowMovieDetails();
    };

    const handleSearch = () => {
        handleShowMovieDetails();
    };

    return (
        <>
            {showMovieDetails && <MovieDetails 
                movieData = {movieDetailsData}
                handleSearch = {handleSearch}
            />}
            <Wrapper 
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleMovieDetails}>
                <Poster image={image}>
                    <MovieAction 
                        {...{isHovered}}
                        movie = {movie}
                    />
                </Poster>
                <MovieInfo>
                    <MovieInfoCol>
                        <Title>{title}</Title>
                        <Genre>{genres.join(' ')}</Genre>
                    </MovieInfoCol>
                    <ReleaseDate>{date}</ReleaseDate>
                </MovieInfo>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    width: 30%;
    margin: 0 0 20px 0;
`;

const Poster = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 600px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 16px 0;
`;

const MovieInfoCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  padding: 4px 0;
`;

const Genre = styled.p`
    margin: 0;
    padding: 4px 0;
`;

const ReleaseDate = styled.p`
    display: table;
    margin: 0;
    padding: 5px 20px;
    border: 1px solid #fff;
    border-radius: 4px;
`;

MovieCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array,
    date: PropTypes.string.isRequired,
    movie: PropTypes.object.isRequired
};

MovieCard.defaultProps = {
    image: 'https://cdn3.vectorstock.com/i/1000x1000/50/07/http-404-not-found-error-message-hypertext-vector-20025007.jpg',
    genres: []
};

export default MovieCard;
