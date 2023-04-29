import { useNavigate, useParams } from 'react-router-dom';
import './QuestionDetail.css';
import { useContext, useState } from 'react';
import { DummyQuestions } from '../../utils/DummyQuestion';
import Header from '../../components/header/Header';
import { AppContext } from '../../context/AppContext';

const QuestionDetailPage = () => {
    const { id } = useParams();
    const contextData = useContext(AppContext);
    const questionId = id ? parseInt(id) : null;

    const navigate = useNavigate();

    const askQuestion = () => {
        navigate('/question');
    }

    const question = contextData.questions.find(q => q.id === questionId);

    return (
        <>
            <div className='header'>
                <div className='header__top'>
                    <h1>{question?.title}</h1>
                    <button onClick={askQuestion}>
                        Ask Question
                    </button>
                </div>
                <div className="">
                    <div className="" title={question?.timestamp}>
                        <span className="fc-light mr2">Asked</span>
                        <time itemProp={question?.timestamp} dateTime={question?.timestamp}>today</time>
                    </div>
                    <div className="">
                        <span className="">Modified</span>
                        <a className="" title={question?.timestamp}>today</a>
                    </div>
                    <div className="" title="Viewed 15 times">
                        <span className="fc-light mr2">Viewed</span>
                        15 times
                    </div>
                </div>
            </div>
            <div id="content" className="snippet-hidden">
                <div id="mainbar" role="main" aria-labelledby="h-all-questions">
                    <div className='question-wrapper'>
                        <div className="question_info">
                            <div className="votes">{question?.votes}</div>
                            <div className="question-summary">
                                <div>{question?.body}</div>
                                <div className="tags">{question?.tags?.map(tag => <div key={tag} className='tag_question'>{tag}</div>)}</div>
                                <div className="details">
                                    <span className="author">asked by {question?.author}</span>
                                    <span className="timestamp">{question?.timestamp}</span>
                                    <span className="answer-count">5 answers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionDetailPage;
