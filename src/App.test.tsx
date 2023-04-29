import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { DummyQuestions } from './utils/DummyQuestion';
import { AppContext } from './context/AppContext';

describe('App', () => {
  it('renders the RouterPage component', () => {
    render(
      <AppContext.Provider value={{ questions: DummyQuestions, updateData: () => {} }}>
        <App />
      </AppContext.Provider>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});