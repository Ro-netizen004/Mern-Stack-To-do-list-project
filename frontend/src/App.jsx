
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import TaskDetailPage from './pages/TaskDetailPage'
import {Route, Routes} from "react-router"

const App = () => {
  return (
    <div data-theme = "synthwave">
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/create" element = {<CreatePage />} />
        <Route path = "/task/:id" element = {<TaskDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App
