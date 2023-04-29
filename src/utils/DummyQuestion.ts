import { Question } from "./Interfaces";

const DummyQuestions: Array<Question> = [{
    id: 1,
    title: 'How do I create a React component?',
    body: 'I am new to React and I want to create a new component for my project. Can someone explain how to do this?',
    author: 'John Doe',
    timestamp: '2022-04-28T16:22:34Z',
    tags: ['react', 'javascript', 'web-development'],
    votes: 5,
},
{
    id: 2,
    title: 'What are the benefits of using Redux in a React project?',
    body: 'I have heard a lot about Redux, but I am not sure if it is worth learning. Can someone explain the benefits of using Redux in a React project?',
    author: 'Sarah Johnson',
    timestamp: '2022-04-29T11:14:20Z',
    tags: ['react', 'redux', 'web-development'],
    votes: 8,
}];

export { DummyQuestions }
