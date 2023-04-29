import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTitle } from '../utils/Interfaces';

const Title: React.FC<HeaderTitle> = ({ title, urlText ,url }) => {

    const navigate = useNavigate();

    const askQuestion = () => {
        const nav = url ?? '/question'
        navigate(nav);
    }

    return (
        <div className='header__top'>
            <h1>{title ? title : 'All Questions'}</h1>
            <button onClick={askQuestion}>
                {urlText ?? 'Ask Question'}
            </button>
        </div>
    );
}

export default Title;