import { useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import './QuestionDetail.css';
import QuestionTopMeta from './QuestionTopMeta';
import QuestionTags from '../../components/Tags';
import { Question } from '../../utils/Interfaces';

const QuestionDetailPage = () => {
    const { id } = useParams();
    const contextData = useContext(AppContext);
    const questionId = id ? parseInt(id) : null;
    const [votes, setVote] = useState(0);

    const question = useMemo(() => {
        const selectedQuestion = contextData.questions.find(q => q.id === questionId);
        setVote(selectedQuestion?.votes ?? 0)
        return selectedQuestion;
    }, [contextData.questions, questionId])


    const cumulateVote = (up?: boolean) => {
        let cumulativeVote = votes;
        cumulativeVote = up ? cumulativeVote + 1 : cumulativeVote - 1;
        setVote(cumulativeVote);
        updateQuestionList(cumulativeVote)
    }

    const updateQuestionList = (cumulativeVote: number) =>{
        let updatedQuestion = question as Question;
        updatedQuestion.votes = cumulativeVote;
        updatedQuestion.isUpdated = true;
        contextData.updateData(updatedQuestion);
    }

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
                            <div className="votes">
                                <button onClick={() => cumulateVote(true)}>^</button>
                                <div >{votes}</div>
                                <button className='down-arrow' onClick={() => cumulateVote()}>^</button>
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
