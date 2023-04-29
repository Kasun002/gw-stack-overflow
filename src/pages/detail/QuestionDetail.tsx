import { useParams } from 'react-router-dom';
import './QuestionDetail.css';
import { useState } from 'react';
import { DummyQuestions } from '../../utils/DummyQuestion';
import Header from '../../components/header/Header';

const QuestionDetail = () => {
    const { id } = useParams();
    const questionId = id ? parseInt(id) : null;
    const [comment, setComment] = useState('');
    const [reply, setReply] = useState('');

    const question = DummyQuestions.find(q => q.id === questionId);

    const handleCommentChange = (event: any) => {
        setComment(event.target.value);
    };

    const handleReplyChange = (event: any) => {
        setReply(event.target.value);
    };

    const handleCommentSubmit = (event: any) => {
        event.preventDefault();
        console.log(`Submitting comment for question ${questionId}: ${comment}`);
        setComment('');
    };

    const handleReplySubmit = (event: any, commentId: number) => {
        event.preventDefault();
        console.log(`Submitting reply for comment ${commentId} on question ${questionId}: ${reply}`);
        setReply('');
    };

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
                                <div className="tags">{question?.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                                <div className="details">
                                    <span className="author">asked by {question?.author}</span>
                                    <span className="timestamp">{question?.timestamp}</span>
                                    <span className="answer-count">{question?.answers.length} answers</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-section">
                            <h2>Comments</h2>
                            <form onSubmit={(event) => handleCommentSubmit(event)}>
                                <label>
                                    Add a comment:
                                    <textarea value={comment} onChange={handleCommentChange} />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                            {question?.comments.map((comment) => (
                                <div key={comment.id} className="comment">
                                    <div>{comment.body}</div>
                                    <div className="details">
                                        <span className="author">commented by {comment.author}</span>
                                        <span className="timestamp">{comment.timestamp}</span>
                                    </div>
                                    <form onSubmit={(event) => handleReplySubmit(event, comment.id)}>
                                        <label>
                                            Add a reply:
                                            <textarea value={reply} onChange={handleReplyChange} />
                                        </label>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionDetail;
