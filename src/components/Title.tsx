import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTitle } from '../utils/Interfaces';

const Title: React.FC<HeaderTitle> = ({ title }) => {

    const navigate = useNavigate();

    const askQuestion = () => {
        navigate('/question');
    }

    return (
        <div className='header__top'>
            <h1>{title ? title : 'All Questions'}</h1>
            <button onClick={askQuestion}>
                Ask Question
            </button>
        </div>
    );
}

export default Title;