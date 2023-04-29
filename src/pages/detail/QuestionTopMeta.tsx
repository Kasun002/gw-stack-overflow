import './QuestionDetail.css';

const QuestionTopMeta: React.FC = () => {
    return (
        <div className="meta-wrapper">
            <div title="">
                <span className="fc-light mr2">Asked</span>
                <time itemProp="" dateTime="">today</time>
            </div>
            <div >
                <span >Modified</span>
                <a title="">today</a>
            </div>
            <div title="Viewed 15 times">
                <span className="fc-light mr2">Viewed</span>
                15 times
            </div>
        </div>
    );
}

export default QuestionTopMeta;