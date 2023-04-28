import { Routes, Route } from "react-router-dom"
import QuestionList from "./pages/list/QuestionList"

const RouterPage: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="/list" element={<QuestionList />} />
        </Routes>
    )
}

export default RouterPage;