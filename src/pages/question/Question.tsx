import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TagsOptions } from '../../utils/Options';
import './Question.css';

const QuestionPage = () => {
    const [questionForm] = Form.useForm();
    const contextData = useContext(AppContext);
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
    };

    const onFinish = () => {
        const fieldValue = questionForm.getFieldsValue();
        fieldValue.id = contextData.questions.length + 1;
        const now = new Date();
        fieldValue.timestamp = now.toISOString();
        contextData.updateData(fieldValue);
        questionForm.resetFields();
    };

    const selectTag = (event: string) => {
        //
    }


    return (
        <div className='container'>
            <div className='header header__img'>
                <div className='header__top'>
                    <h1>Ask a public question</h1>
                </div>
            </div>
            <div className='card'>
                <Form
                    form={questionForm}
                    {...layout}
                    name="nest-messages"
                    style={{ maxWidth: 'auto' }}
                    validateMessages={validateMessages}
                >
                    <label>Title</label>
                    <div>Be specific and imagine you’re asking a question to another person</div>
                    <Form.Item name={['question', 'title']} rules={[{ required: true }]}>
                        <Input style={{ display: 'flex' }} />
                    </Form.Item>
                    <label>Body</label>
                    <div>Include all the information someone would need to answer your question</div>
                    <Form.Item name={['question', 'body']} rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <label>Tags</label>
                    <div>Add up to 5 tags to describe what your question is about</div>
                    <Form.Item name={['question', 'tags']}>
                        <Select
                            mode="tags"
                            showSearch
                            allowClear
                            optionLabelProp="children"
                            onChange={selectTag}
                            style={{ width: 200 }}
                            placeholder="Select a person"
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
            <div style={{ width: "70%", padding: "8px 0px" }}>
                <Button className="sof-button" type="primary" htmlType="submit" onClick={onFinish}>
                    Post your question
                </Button>
            </div>
        </div>
    );
}

export default QuestionPage;
