import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import QuestionPage from './Question';

describe('QuestionPage', () => {
  test('renders the correct title', async () => {
    const { getByText } = await render(
      <BrowserRouter>
        <QuestionPage />
      </BrowserRouter>
    );
    const titleElement = getByText(/Ask a public question/i);
    expect(titleElement).toBeInTheDocument();
  });
});