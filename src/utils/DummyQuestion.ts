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
},
{
    id: 3,
    title: 'How do I make a responsive website?',
    body: 'I am working on a website, and I want to make sure it looks good on all screen sizes. What is the best way to make a website responsive?',
    author: 'Mark Smith',
    timestamp: '2022-04-30T09:36:12Z',
    tags: ['responsive-design', 'web-development'],
    votes: 12,
},
{
    id: 4,
    title: 'What is the difference between var, let, and const in JavaScript?',
    body: 'I am new to JavaScript and I am not sure when to use var, let, or const. Can someone explain the difference between these three keywords?',
    author: 'Lisa Thompson',
    timestamp: '2022-04-30T14:52:00Z',
    tags: ['javascript', 'programming'],
    votes: 15,
},
{
    id: 5,
    title: 'How do I use Git to manage my code?',
    body: 'I am new to Git and I want to start using it to manage my code. Can someone explain how to use Git?',
    author: 'Tom Wilson',
    timestamp: '2022-05-01T07:23:54Z',
    tags: ['git', 'version-control', 'programming'],
    votes: 7,
},
{
    id: 6,
    title: 'What is the difference between front-end and back-end development?',
    body: 'I am interested in learning web development, but I am not sure what the difference is between front-end and back-end development. Can someone explain?',
    author: 'Jennifer Lee',
    timestamp: '2022-05-02T12:10:45Z',
    tags: ['web-development', 'programming'],
    votes: 10,
},
{
    id: 7,
    title: 'How do I center a div in CSS?',
    body: 'I am trying to center a div on my webpage, but I am having trouble. Can someone explain how to center a div in CSS?',
    author: 'Emily Johnson',
    timestamp: '2022-05-03T08:45:30Z',
    tags: ['css', 'web-development'],
    votes: 6,
}, {
    id: 8,
    title: 'What are some best practices for React development?',
    body: 'I want to improve my React skills and learn some best practices. What are some tips and tricks for developing with React?',
    author: 'Jane Smith',
    timestamp: '2022-04-30T09:42:18Z',
    tags: ['react', 'web-development'],
    votes: 12,
},
{
    id: 9,
    title: 'How can I improve my CSS skills?',
    body: 'I struggle with CSS and want to improve my skills. What are some good resources for learning CSS?',
    author: 'Bob Johnson',
    timestamp: '2022-05-01T14:30:45Z',
    tags: ['css', 'web-development'],
    votes: 4,
},
{
    id: 10,
    title: 'What are some popular front-end frameworks?',
    body: 'I am new to front-end development and want to know more about popular frameworks. What are some of the most widely used frameworks?',
    author: 'Alice Doe',
    timestamp: '2022-05-02T08:12:55Z',
    tags: ['react', 'angular', 'vue', 'web-development'],
    votes: 7,
},
{
    id: 11,
    title: 'How can I optimize the performance of my React app?',
    body: 'My React app is running slowly and I want to optimize its performance. What are some techniques I can use to speed up my app?',
    author: 'John Smith',
    timestamp: '2022-05-03T16:55:02Z',
    tags: ['react', 'performance', 'web-development'],
    votes: 11,
},
{
    id: 12,
    title: 'What are some common web development tools?',
    body: 'I am new to web development and want to know more about the tools used by developers. What are some common tools used in web development?',
    author: 'Sarah Johnson',
    timestamp: '2022-05-04T11:22:08Z',
    tags: ['web-development'],
    votes: 6,
},
{
    id: 13,
    title: 'What is the best way to debug a React app?',
    body: 'I am having trouble debugging my React app and want to know the best practices for debugging. What are some tips and tricks for debugging a React app?',
    author: 'Bob Smith',
    timestamp: '2022-05-05T13:41:30Z',
    tags: ['react', 'debugging', 'web-development'],
    votes: 8,
},
{
    id: 14,
    title: 'How can I make my React app accessible?',
    body: 'I want to make my React app accessible to users with disabilities. What are some best practices for making a React app accessible?',
    author: 'Jane Doe',
    timestamp: '2022-05-06T09:15:12Z',
    tags: ['react', 'accessibility', 'web-development'],
    votes: 9,
}, {
    id: 15,
    title: 'What is the difference between HTTP and HTTPS?',
    body: 'I am trying to understand the difference between HTTP and HTTPS. Can someone explain it to me?',
    author: 'Jane Smith',
    timestamp: '2022-05-02T08:42:10Z',
    tags: ['web-development', 'security'],
    votes: 4,
},
{
    id: 16,
    title: 'How can I optimize my React app for performance?',
    body: 'My React app is running slow and I want to optimize it for performance. What are some best practices for doing this?',
    author: 'Bob Johnson',
    timestamp: '2022-05-03T16:18:22Z',
    tags: ['react', 'performance', 'web-development'],
    votes: 7,
},
{
    id: 17,
    title: 'What are some common CSS frameworks?',
    body: 'I am looking for a CSS framework to use in my project. What are some common ones and what are their features?',
    author: 'Emily Rodriguez',
    timestamp: '2022-05-05T10:55:48Z',
    tags: ['css', 'web-development'],
    votes: 3,
},
{
    id: 18,
    title: 'What is the difference between a div and a span in HTML?',
    body: 'I am confused about when to use a div and when to use a span in HTML. Can someone explain the difference between the two?',
    author: 'David Lee',
    timestamp: '2022-05-06T14:27:12Z',
    tags: ['html', 'web-development'],
    votes: 5,
},
{
    id: 19,
    title: 'What are some best practices for version control with Git?',
    body: 'I am new to Git and I want to learn some best practices for version control. What are some tips and tricks for using Git effectively?',
    author: 'Rachel Kim',
    timestamp: '2022-05-07T09:13:06Z',
    tags: ['git', 'version-control'],
    votes: 6,
},
{
    id: 20,
    title: 'How can I make my website more accessible?',
    body: 'I want to make my website more accessible for people with disabilities. What are some best practices for doing this?',
    author: 'Michael Chen',
    timestamp: '2022-05-08T13:44:51Z',
    tags: ['accessibility', 'web-development'],
    votes: 2,
},
{
    id: 21,
    title: 'What is the difference between margin and padding in CSS?',
    body: 'I am confused about the difference between margin and padding in CSS. Can someone explain it to me?',
    author: 'Ava Brown',
    timestamp: '2022-05-09T17:32:19Z',
    tags: ['css', 'web-development'],
    votes: 8,
}, {
    id: 22,
    title: 'How can I optimize my React app performance?',
    body: 'My React app is running slow, and I want to optimize its performance. What are some techniques that I can use to improve the performance of my React app?',
    author: 'Mary Smith',
    timestamp: '2022-05-05T14:36:12Z',
    tags: ['react', 'performance', 'web-development'],
    votes: 10,
},
{
    id: 23,
    title: 'What is the best way to handle authentication in a React app?',
    body: 'I am building a React app and I need to implement user authentication. What is the best way to handle authentication in a React app?',
    author: 'Robert Johnson',
    timestamp: '2022-05-06T09:42:01Z',
    tags: ['react', 'authentication', 'web-development'],
    votes: 7,
},
{
    id: 24,
    title: 'How do I integrate a third-party library in my React app?',
    body: 'I want to use a third-party library in my React app, but I am not sure how to integrate it. Can someone explain how to integrate a third-party library in a React app?',
    author: 'Lucas Brown',
    timestamp: '2022-05-07T16:18:44Z',
    tags: ['react', 'libraries', 'web-development'],
    votes: 4,
},
{
    id: 25,
    title: 'What are some popular CSS frameworks for React?',
    body: 'I am new to React and I want to know which CSS frameworks are popular among React developers. Can someone recommend some CSS frameworks for React?',
    author: 'Emily Davis',
    timestamp: '2022-05-08T11:54:21Z',
    tags: ['react', 'css', 'web-development'],
    votes: 12,
},
{
    id: 26,
    title: 'How do I deploy my React app to production?',
    body: 'I have finished building my React app and I want to deploy it to production. Can someone explain how to deploy a React app to production?',
    author: 'Michael Wilson',
    timestamp: '2022-05-09T08:10:19Z',
    tags: ['react', 'deployment', 'web-development'],
    votes: 6,
},
{
    id: 27,
    title: 'How can I implement server-side rendering in my React app?',
    body: 'I want to implement server-side rendering in my React app, but I am not sure how to do it. Can someone explain how to implement server-side rendering in a React app?',
    author: 'Sophia Lee',
    timestamp: '2022-05-10T13:27:56Z',
    tags: ['react', 'server-side-rendering', 'web-development'],
    votes: 9,
},
{
    id: 28,
    title: 'What is the difference between props and state in React?',
    body: 'I am new to React and I am confused about the difference between props and state. Can someone explain the difference between props and state in React?',
    author: 'Daniel Johnson',
    timestamp: '2022-05-11T17:42:39Z',
    tags: ['react', 'web-development'],
    votes: 11,
},{
    id: 29,
    title: 'What is the difference between HTML and XHTML?',
    body: 'I am a beginner web developer and I am confused about the differences between HTML and XHTML. Can someone explain the main differences between these two markup languages?',
    author: 'Jane Smith',
    timestamp: '2022-05-03T09:02:11Z',
    tags: ['html', 'xhtml', 'web-development'],
    votes: 3,
  },
  {
    id: 30,
    title: 'What are the best practices for responsive web design?',
    body: 'I want to make my website responsive to different screen sizes, but I am not sure what the best practices are for responsive web design. Can someone provide some tips and guidelines?',
    author: 'Bob Johnson',
    timestamp: '2022-05-04T15:43:02Z',
    tags: ['responsive-web-design', 'web-development'],
    votes: 6,
  }];

export { DummyQuestions }