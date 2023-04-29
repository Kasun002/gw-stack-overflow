
const DummyQuestions = [{
    id: 1,
    title: 'How do I create a React component?',
    body: 'I am new to React and I want to create a new component for my project. Can someone explain how to do this?',
    author: 'John Doe',
    timestamp: '2022-04-28T16:22:34Z',
    tags: ['react', 'javascript', 'web-development'],
    votes: 5,
    answers: [
        {
            id: 5678,
            body: 'You can create a React component by defining a function or class that returns JSX. Here is an example:\n\n```jsx\nfunction MyComponent() {\n  return (\n    <div>\n      <h1>Hello World!</h1>\n    </div>\n  );\n}\n```',
            author: 'Jane Smith',
            timestamp: '2022-04-28T16:35:12Z',
            votes: 2,
            comments: [
                {
                    id: 9876,
                    body: 'Thanks for the example! I was able to create my own component using this code.',
                    author: 'Bob Johnson',
                    timestamp: '2022-04-28T17:01:54Z'
                }
            ]
        }
    ],
    comments: [
        {
            id: 6543,
            body: 'Great question! I had the same issue when I was starting out with React.',
            author: 'Samantha Lee',
            timestamp: '2022-04-28T16:25:43Z'
        }
    ]
},
{
    id: 2,
    title: 'What are the benefits of using Redux in a React project?',
    body: 'I have heard a lot about Redux, but I am not sure if it is worth learning. Can someone explain the benefits of using Redux in a React project?',
    author: 'Sarah Johnson',
    timestamp: '2022-04-29T11:14:20Z',
    tags: ['react', 'redux', 'web-development'],
    votes: 8,
    answers: [
        {
            id: 5679,
            body: 'Redux can help you manage complex state in your React app, and make it easier to share state between components. Some other benefits of using Redux include:\n\n- Predictable state management\n- Time-travel debugging\n- Better code organization\n- Easier testing\n\nHowever, Redux does have a bit of a learning curve, so it might not be necessary for smaller projects.',
            author: 'Michael Brown',
            timestamp: '2022-04-29T11:27:05Z',
            votes: 4,
            comments: [
                {
                    id: 9877,
                    body: 'Thanks for the explanation! I have been considering using Redux for my next project, and this helps me understand the benefits.',
                    author: 'Emily Davis',
                    timestamp: '2022-04-29T12:02:38Z'
                }
            ]
        },
        {
            id: 5680,
            body: 'Redux is overkill for most React projects. If you are just starting out with React, I would recommend focusing on learning the basics of React before diving into Redux.',
            author: 'David Wilson',
            timestamp: '2022-04-29T13:14:47Z',
            votes: -2,
            comments: [
                {
                    id: 9878,
                    body: 'I disagree. I think learning Redux early on can help you write better React code in the long run.',
                    author: 'Oliver Smith',
                    timestamp: '2022-04-29T14:01:32Z'
                }
            ]
        }
    ],
    comments: [
        {
            id: 6544,
            body: 'I have found Redux to be really helpful in my React projects, especially when working with large amounts of state.',
            author: 'Jake Taylor',
            timestamp: '2022-04-29T11:36:22Z'
        }
    ]
}];

export { DummyQuestions }
