import React from 'react';
import './App.css';
import RouterPage from './Router';
import { AppContext } from './context/AppContext';
import { DummyQuestions } from './utils/DummyQuestion';
import { Question } from './utils/Interfaces';

const App = () => {
  const [data, setData] = React.useState<Question[]>(DummyQuestions);

  const updateData = (newQuestion: Question) => {
    const tempData = data;
    tempData.push(newQuestion)
    setData(tempData);
  };

  const providerData = { questions: data, updateData }


  return (
    <div className="App">
      <AppContext.Provider value={providerData}>
        <RouterPage></RouterPage>
      </AppContext.Provider>
    </div>
  );
}

export default App;
