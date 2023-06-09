import { Button, Form, Input, Select } from 'antd';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { TagsOptions } from '../../utils/Options';
import './Question.css';
import { Question } from '../../utils/Interfaces';
import useRandomName from '../../hooks/UseRandomName';
import Title from '../../components/Title';

const QuestionPage = () => {
    const [questionForm] = Form.useForm();
    const contextData = useContext(AppContext);

    const { firstName, lastName, generateName } = useRandomName();

    useEffect(() => {
        generateName();
    }, [generateName])


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!',
        types: {
            titleLength: 'Title must be at most 255 characters',
            maxTags: 'You can select up to 5 tags'
        },
        string: {
            // eslint-disable-next-line
            max: 'Title must be at most ${max} characters',
        }
    };

    const onFinish = async () => {
        try {
            await questionForm.validateFields();
            const fieldValue = questionForm.getFieldsValue().question as Question;
            fieldValue.id = contextData.questions.length + 1;
            const now = new Date();
            fieldValue.timestamp = now.toISOString();
            fieldValue.author = firstName + ' ' + lastName;
            fieldValue.votes = 0;
            contextData.updateData(fieldValue);
            questionForm.resetFields();
            generateName();
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className='container'>
            <div className='header__img'>
                <Title title='Ask a public question' url='/' urlText='Question List'></Title>
            </div>
            <div className='card'>
                <Form
                    form={questionForm}
                    {...layout}
                    name="nest-messages"
                    style={{ maxWidth: 'auto' }}
                >
                    <label>Title</label>
                    <div>Be specific and imagine you’re asking a question to another person</div>
                    <Form.Item name={['question', 'title']} rules={[{ required: true, message: validateMessages.required },
                    { type: 'string', max: 255, message: validateMessages.types.titleLength }]}>
                        <Input style={{ display: 'flex' }} data-testid="questionTitle" />
                    </Form.Item>
                    <label>Body</label>
                    <div>Include all the information someone would need to answer your question</div>
                    <Form.Item name={['question', 'body']} rules={[{ required: true, message: validateMessages.required }]}>
                        <Input.TextArea data-testid="questionBody"/>
                    </Form.Item>
                    <label>Tags</label>
                    <div>Add up to 5 tags to describe what your question is about</div>
                    <Form.Item name={['question', 'tags']} rules={[{
                        validator: (_, value) =>
                            value && value.length <= 5
                                ? Promise.resolve()
                                : Promise.reject(new Error(validateMessages.types.maxTags)),
                    }]}>
                        <Select
                            mode="tags"
                            showSearch
                            allowClear
                            optionLabelProp="children"
                            placeholder="Select a person"
                            data-testid="questionTag"
                        >
                            {TagsOptions.map((option) => {
                                return (<Select.Option key={option} value={option}>
                                    {option}
                                </Select.Option>)
                            })}
                        </Select>
                    </Form.Item>
                </Form>
            </div>
            <div className='submit__wrapper'>
                <Button className="sof-button" type="primary" htmlType="submit" onClick={onFinish}>
                    Post your question
                </Button>
            </div>
        </div>
    );
}

export default QuestionPage;
