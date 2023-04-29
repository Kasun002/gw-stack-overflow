import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { AppContext } from '../../context/AppContext';
import './QuestionList.css';
import { PAGE_SIZE } from '../../utils/Constants';
import QuestionTags from '../../components/Tags';

const QuestionListPage = () => {
    const contextData = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(contextData.questions.length / PAGE_SIZE);

    const visibleQuestions = contextData.questions.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className='page-wrapper'>
            <div id="content" className="snippet-hidden">
                <div id="mainbar" role="main" aria-labelledby="h-all-questions">
                    <Header></Header>
                </div>
            </div>
            <div className="question-list">
                {visibleQuestions.map((question: any) => (
                    <div key={question.id} className="question">
                        <div className="votes">{question.votes}</div>
                        <div className="question-summary">
                            <Link to={`/question/${question.id}`} className="title">{question.title}</Link>
                            <div>{question.body}</div>
                            <QuestionTags tags={question?.tags}></QuestionTags>
                            <div className="details">
                                <span className="author">asked by {question.author}</span>
                                <span className="timestamp">{question.timestamp}</span>
                                <span className="answer-count">5 answers</span>
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
        </div>

    );
}

export default QuestionListPage;
