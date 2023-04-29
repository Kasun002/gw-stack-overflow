import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import './QuestionDetail.css';
import QuestionTopMeta from './QuestionTopMeta';
import QuestionTags from '../../components/Tags';

const QuestionDetailPage = () => {
    const { id } = useParams();
    const contextData = useContext(AppContext);
    const questionId = id ? parseInt(id) : null;

    const question = contextData.questions.find(q => q.id === questionId);

    return (
        <div className='page-wrapper'>
            <div className='header'>
                <Title title={question?.title} />
                <QuestionTopMeta></QuestionTopMeta>
            </div>
            <div id="content" className="snippet-hidden">
                <div id="mainbar" role="main" aria-labelledby="h-all-questions">
                    <div className='question-wrapper'>
                        <div className="question_info">
                            <div className="votes">{question?.votes}
                            </div>
                            <div className="question-summary">
                                <div>{question?.body}</div>
                                <QuestionTags tags={question?.tags}></QuestionTags>
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
        </div>
    );
}

export default QuestionDetailPage;
