import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieActionButton from '../components/MovieActionButton';
import ActionOptions from './ActionOptions';
import DeleteMovie from '../components/DeleteMovie';

const MovieAction = ({isHovered, movieId, onDeleteMovie}) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleShowOptions = () => {
        setShowOptions(!showOptions);
    };

    const [showDelete, setShowDelete] = useState(false);

    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    };

    const [deleteMovie, setDeleteMovie] = useState(false);

    const handleDeleteMovie = () => {
        setDeleteMovie(true);
        handleShowOptions();
        handleShowDelete();
    };

    const [editMovie, setEditMovie] = useState(false);

    const handleEditMovie = () => {
        setEditMovie(true);
        handleShowOptions();
        console.log('handleEditMovie', editMovie);
    };

    const onDelete = () => {
        onDeleteMovie(movieId);
        // handleShow();
    };

    return (
        <>
            { isHovered && <MovieActionButton {...{handleShowOptions}}/> }
            { showOptions && <ActionOptions {...{handleEditMovie, handleDeleteMovie}}/>}
            { showDelete && <DeleteMovie {...{handleShowDelete, onDelete}}/>}
        </>
    );
};

MovieAction.propTypes = {
    isHovered: PropTypes.bool.isRequired,
};

export default MovieAction;
