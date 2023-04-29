import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterPage from './Router';
import { AppContext } from './context/AppContext';
import { DummyQuestions } from './utils/DummyQuestion';

const App = () => {
  const providerData = { questions: DummyQuestions }
  return (
    <div className="App">
      <AppContext.Provider value={providerData}>
        <RouterPage></RouterPage>
      </AppContext.Provider>
    </div>
  );
}

export default App;
