import { useParams } from 'react-router-dom';
import './QuestionDetail.css';
import { useState } from 'react';
import { DummyQuestions } from '../../utils/DummyQuestion';
import Header from '../../components/header/Header';

const QuestionDetailPage = () => {
    const { id } = useParams();
    const questionId = id ? parseInt(id) : null;

    const question = DummyQuestions.find(q => q.id === questionId);

    return (
        <>
            <div id="content" className="snippet-hidden">
                <div id="mainbar" role="main" aria-labelledby="h-all-questions">
                    <Header></Header>
                    <div className='question-wrapper'>
                        <div className="question">
                            <div className="votes">{question?.votes}</div>
                            <div className="question-summary">
                                <h1>{question?.title}</h1>
                                <div>{question?.body}</div>
                                <div className="tags">{question?.tags?.map(tag => <span key={tag}>{tag}</span>)}</div>
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
