import { render, screen } from '@testing-library/react';
import QuestionPage from './Question';

describe('QuestionPage', () => {
    beforeEach(() => {
        render(
            <QuestionPage />
        );
    });

    test('renders page title', () => {
        const titleElement = screen.getByText('Ask a public question');
        expect(titleElement).toBeInTheDocument();
    });
});