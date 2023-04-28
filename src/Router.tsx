import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuestionList from "./pages/list/QuestionList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <QuestionList />
    },
]);

const RouterPage = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterPage;