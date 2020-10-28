import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Logo from '../components/Logo';
import SearchBar from './SearchBar';
import AddMovie from '../components/AddMovie';
import AddMovieModal from './AddMovieModal';
import MovieForm from './MovieForm';
import { addMovie } from '../store/actions/moviesActions';

const Header = () => {
    const [showModal, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleShow = () => {
        setShow(!showModal);
    };

    const [initialData] = useState({
        title: '',
        release_date: '',
        poster_path: '',
        overview: '',
        runtime: 0,
        genres: []
    });

    return (
        <Wrapper>
            <WrapBg>
                <HeaderTop>
                    <Logo><span>Netflix</span>roulette</Logo>
                    <AddMovie {...{handleShow}}/>
                    { showModal && <MovieForm {...{showModal, handleShow, initialData}}/> }
                </HeaderTop>
                <SearchBar/>
            </WrapBg>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    height: 460px;
    font-family: Helvetica, sans-serif;
    background-image: url('https://www.indiewire.com/wp-content/uploads/2018/10/Netflix-menu-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 14%;
`;

const WrapBg = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 80px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
`;

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default Header;
