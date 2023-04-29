import React from 'react';

const QuestionTags: React.FC<{ tags: String[] | undefined }> = ({ tags }) => {


    return (
        <div className="tags">{tags?.map((tag, index) => <div key={index} className='tag_question'>{tag}</div>)}</div>
    );
}

export default QuestionTags;