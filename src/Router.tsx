import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuestionPage from "./pages/question/Question";
import QuestionListPage from "./pages/list/QuestionList";
import QuestionDetailPage from "./pages/detail/QuestionDetail";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <QuestionListPage />
        },
        {
            path: "/question",
            element: <QuestionPage />
        },
        {
            path: "question/:id",
            element: <QuestionDetailPage />
        }],
    { basename: '/' }
);

const RouterPage = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterPage;