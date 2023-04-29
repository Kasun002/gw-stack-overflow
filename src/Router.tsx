import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuestionList from "./pages/list/QuestionList";
import Question from "./pages/question/Question";
import QuestionDetail from "./pages/detail/QuestionDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <QuestionList />
    },
    {
        path: "/question",
        element: <Question/>
    },
    {
        path: "/detail",
        element: <QuestionDetail/>
    },
]);

const RouterPage = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterPage;