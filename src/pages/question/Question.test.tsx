import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import QuestionPage from './Question';

describe('QuestionPage', () => {
  test('renders the correct Title component', async () => {
    const { getByText } = await render(
      <BrowserRouter>
        <QuestionPage />
      </BrowserRouter>
    );
    const titleElement = getByText(/Ask a public question/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('validates the question title field', async () => {
    const { getByLabelText, getByText } = await render(
      <BrowserRouter>
        <QuestionPage />
      </BrowserRouter>
    );

    const titleInput = getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: '' } });

    const submitButton = getByText(/Post your question/i);
    fireEvent.click(submitButton);

    const errorMessage = getByText(/Title is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders the correct title', async () => {
    const { getByText, getByLabelText } = await render(
      <BrowserRouter>
        <QuestionPage />
      </BrowserRouter>
    );
  
    const titleInput = getByLabelText('Title');
    const bodyInput = getByLabelText('Body');
    const postButton = getByText('Post your question');
  
    fireEvent.change(titleInput, { target: { value: 'a'.repeat(256) } });
    fireEvent.change(bodyInput, { target: { value: 'Test body' } });
    fireEvent.click(postButton);
    const errorElement = await waitFor(() =>
      getByText('Title must be at most 255 characters')
    );
    expect(errorElement).toBeInTheDocument();
  });

  test('displays validation error message for body field', async () => {
    const { getByText, getByRole } = await render(
      <BrowserRouter>
        <QuestionPage />
      </BrowserRouter>
    );
    const submitButton = getByRole('button', { name: /Post your question/i });
    fireEvent.click(submitButton);
    const errorMessage = getByText('Body is required!');
    expect(errorMessage).toBeInTheDocument();
  });
});