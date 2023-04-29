import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Title from '../Title';
import './Header.css';

const Header = () => {
    const contextData = useContext(AppContext);

    useEffect(() => {
        console.log(contextData.questions)
    }, [contextData])


    return (
        <div className='header'>
            <Title title="" />
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