/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import MovieActionButton from '../components/MovieActionButton';
import ActionOptions from './ActionOptions';
import DeleteMovie from '../components/DeleteMovie';
import AddMovieModal from './AddMovieModal';
import { deleteMovies } from '../actions/moviesActions';

const MovieAction = ({isHovered, movie, onDeleteMovie, onEditMovie}) => {
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
        // onDeleteMovie(movie.id);
        dispatch(deleteMovies(movie.id));
    };

    const [initialData] = useState({
        ...movie
    });

    const onSubmit = (movieData) => {
        onEditMovie(movieData);
        handleShow();
    };

    return (
        <>
            { isHovered && <MovieActionButton {...{handleShowOptions}}/> }
            { showOptions && <ActionOptions {...{handleEditMovie, handleDeleteMovie}}/>}
            { showDelete && <DeleteMovie {...{handleShowDelete, onDelete}}/>}
            { showEdit && <AddMovieModal {...{handleShow, handleEditMovie, initialData, onSubmit}}/> }
        </>
    );
};

MovieAction.propTypes = {
    isHovered: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired,
    onDeleteMovie: PropTypes.func,
    onEditMovie: PropTypes.func
};

MovieAction.defaultProps = {
    onDeleteMovie: () => {},
    onEditMovie: () => {}
};

export default MovieAction;
