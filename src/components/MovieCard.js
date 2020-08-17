import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieCard = (props) => {
    const { title, description, date, image } = props;

    return (
        <Wrapper>
            <Poster image={image}>
                <Icon/>
            </Poster>
            <MovieInfo>
                <MovieInfoCol>
                    <Title>{title}</Title>
                    <Genre>{description}</Genre>
                </MovieInfoCol>
                <ReleaseDate>{date}</ReleaseDate>
            </MovieInfo>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 30%;
    margin: 0 0 20px 0;
`;

const Icon = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    margin: 30px 20px;
    border-radius: 50%;
    background-image: radial-gradient(circle,white 4px,transparent 5px);
    background-size: 100% 33.33%;
    background-color: #232323;
    cursor: pointer;
    opacity: 0;
`;

const Poster = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 600px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;

    &:hover ${Icon} {
        opacity: 1;
    }
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
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
};

MovieCard.defaultProps = {
    image: 'https://cdn3.vectorstock.com/i/1000x1000/50/07/http-404-not-found-error-message-hypertext-vector-20025007.jpg'
};

export default MovieCard;