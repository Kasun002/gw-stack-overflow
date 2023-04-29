import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { DummyQuestions } from '../../utils/DummyQuestion';
import './QuestionList.css';
import { useState } from 'react';
const PAGE_SIZE = 15;
const QuestionList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(DummyQuestions.length / PAGE_SIZE);

    const visibleQuestions = DummyQuestions.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <>
            <div id="content" className="snippet-hidden">
                <div id="mainbar" role="main" aria-labelledby="h-all-questions">
                    <Header></Header>
                    <div className='question-wrapper'>
                        QuestionList Page
                    </div>
                </div>
            </div>
            <div className="question-list">
                {visibleQuestions.map(question => (
                    <div key={question.id} className="question">
                        <div className="votes">{question.votes}</div>
                        <div className="question-summary">
                            <Link to={`/questions/${question.id}`} className="title">{question.title}</Link>
                            <div>{question.body}</div>
                            <div className="tags">{question.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                            <div className="details">
                                <span className="author">asked by {question.author}</span>
                                <span className="timestamp">{question.timestamp}</span>
                                <span className="answer-count">{question.answers.length} answers</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={i + 1 === currentPage ? "active" : ""}
                        onClick={() => handleClick(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>

    );
}

export default QuestionList;
