import './QuestionDetail.css';

const QuestionTopMeta: React.FC = () => {
    return (
        <div className="">
            <div className="" title="">
                <span className="fc-light mr2">Asked</span>
                <time itemProp="" dateTime="">today</time>
            </div>
            <div className="">
                <span className="">Modified</span>
                <a className="" title="">today</a>
            </div>
            <div className="" title="Viewed 15 times">
                <span className="fc-light mr2">Viewed</span>
                15 times
            </div>
        </div>
    );
}

export default QuestionTopMeta;