import { useState } from 'react';
import './Question.css';
import Header from '../../components/header/Header';
interface FormData {
    title: string;
    body: string;
    tags: string;
}

const Question = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        body: '',
        tags: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.title || !formData.body) {
            setErrorMessage('Please enter a title and a body.');
            return;
        }
    };

    return (
        <div className="container">
            <Header />
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Body:
                    <textarea name="body" value={formData.body} onChange={handleChange} />
                </label>
                <label>
                    Tags:
                    <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
                </label>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" disabled={!formData.title || !formData.body}>
                    Post Your Question
                </button>
            </form>
        </div>
    );
}

export default Question;
