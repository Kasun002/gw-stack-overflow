import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div>
                <h1>All Questions</h1>
                <button>
                    Ask Question
                </button>
            </div>
            <div>
                <div>
                    23,683,186
                    questions
                </div>
                <div>
                    <div>
                        <a href="">Newest</a>
                        <a href="">Active</a>
                        <a href=""> <div>Bountied</div> <div>245</div></a>
                        <a href="">Unanswered</a>
                        <button>More</button>
                    </div>
                    <button>Filter</button>
                </div>
            </div>
        </>


    );
}

export default Header;