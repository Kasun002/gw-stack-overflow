import { act, render, screen } from "@testing-library/react";
import QuestionPage from "./Question";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockMatchMedia = (mediaQuery: string): MediaQueryList => {
  return {
    media: mediaQuery,
    matches: false,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockMatchMedia,
});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../utils/Options', () => ({
  TagsOptions: ['node.js', 'jquery',],
  firstNames: ['John', 'Jane'],
  lastNames:['Doe', 'Smith',]
}));

describe("Questions Component", () => {
  
  test("Check title", () => {
    render(
      <BrowserRouter>
        <QuestionPage></QuestionPage>
      </BrowserRouter>
    );
    const titleElement = screen.getByText(`Ask a public question`);
    expect(titleElement).toBeInTheDocument();
  });

  test("Submit form question", async () => {
    render(
      <BrowserRouter>
        <QuestionPage></QuestionPage>
      </BrowserRouter>
    );

    const questionTitle: HTMLInputElement = await screen.getByTestId('questionTitle') as HTMLInputElement;
    await act(async () => {
      userEvent.type(questionTitle, 'How to write test');
    });
    expect(questionTitle.value).toBe('How to write test');
    expect(questionTitle).toBeInTheDocument();

    const questionBody: HTMLTextAreaElement = await screen.getByTestId('questionBody') as HTMLTextAreaElement;
    await act(async () => {
    userEvent.type(questionBody,  'Need to know sample formate of a unit test in jest react');
    });
    expect(questionBody.value).toBe('Need to know sample formate of a unit test in jest react');
    expect(questionBody).toBeInTheDocument();
    
    const questionTag: HTMLSelectElement = await screen.getByRole('combobox') as HTMLSelectElement;
    await act(async () => {
    userEvent.click(questionTag);
    });
    await screen.findAllByText('node.js');
    await act(async () => {
    userEvent.click(screen.getAllByText('node.js')[0]);
    });

    const submitButton:HTMLButtonElement = screen.getByText('Post your question');
    await act(async () => {
    userEvent.click(submitButton);
    });
    expect(submitButton).toBeInTheDocument();
  });

  test("Should show validation messges", async () => {
    render(
      <BrowserRouter>
        <QuestionPage></QuestionPage>
      </BrowserRouter>
    );
    const submitButton:HTMLButtonElement = screen.getByText('Post your question');
    userEvent.click(submitButton);

    const titleError = await screen.findByText('question,title is required!');
    expect(titleError).toBeInTheDocument();
    const bodyError = await screen.findByText('question,body is required!');
    expect(bodyError).toBeInTheDocument();
    const tagError = await screen.findByText('You can select up to 5 tags');
    expect(tagError).toBeInTheDocument();
  });
});