import React, { useContext } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Header = () => {
    const contextData = useContext(AppContext);

    const navigate = useNavigate();

    const askQuestion = () => {
        navigate('/question');
    }

    return (
        <div className='header'>
            <div className='header__top'>
                <h1>All Questions</h1>
                <button onClick={askQuestion}>
                    Ask Question
                </button>
            </div>
            <div className='header__bottom'>
                <div className='text'>
                {contextData.questions.length}&nbsp;
                    questions
                </div>
                <div className='filter'>
                    <div className='list'>
                        <a href="">Newest</a>
                        <a href="">Active</a>
                        <a href=""><div className='tag-wrapper'>Bountied <div className='tag'>245</div></div></a>
                        <a href="">Unanswered</a>
                        <button>More</button>
                    </div>
                    <button>Filter</button>
                </div>
            </div>
        </div>
    );
}

export default Header;