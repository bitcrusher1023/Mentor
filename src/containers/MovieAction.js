/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MovieActionButton from '../components/MovieActionButton';
import ActionOptions from './ActionOptions';
import DeleteMovie from '../components/DeleteMovie';
import { deleteMovies } from '../store/actions/moviesActions';
import MovieForm from './MovieForm';

const MovieAction = ({isHovered, movie}) => {
    const [showOptions, setShowOptions] = useState(false);
    const dispatch = useDispatch();

    const handleShowOptions = () => {
        setShowOptions(!showOptions);
    };

    const [showDelete, setShowDelete] = useState(false);

    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    };

    const [deleteMovie, setDeleteMovie] = useState(false);

    const handleDeleteMovie = () => {
        setDeleteMovie(!deleteMovie);
        handleShowOptions();
        handleShowDelete();
    };

    const [showEdit, setShowEdit] = useState(false);

    const handleShow = () => {
        setShowEdit(!showEdit);
    };

    const [editMovie, setEditMovie] = useState(false);

    const handleEditMovie = () => {
        setEditMovie(!editMovie);
        handleShowOptions();
        handleShow();
    };

    const onDelete = () => {
        dispatch(deleteMovies(movie.id));
    };

    const [initialData] = useState({
        ...movie
    });

    return (
        <>
            { isHovered && <MovieActionButton {...{handleShowOptions}}/> }
            { showOptions && <ActionOptions {...{handleEditMovie, handleDeleteMovie}}/>}
            { showDelete && <DeleteMovie {...{handleShowDelete, onDelete}}/>}
            { showEdit && <MovieForm {...{handleShow, initialData}}/> }
        </>
    );
};

MovieAction.propTypes = {
    isHovered: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired
};

export default MovieAction;
