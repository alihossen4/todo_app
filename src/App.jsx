import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/user/Dashboard";
import ManageTasks from "./pages/admin/ManageTasks";
import CreateTask from "./pages/admin/CreateTask";
import ManageUsers from "./pages/admin/ManageUsers";
const App =() =>{
  return(
    <div>
      jsdfj
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
            <Route element={<PrivateRoute allowedRoles={["admin"]}/>} >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/tasks" element={<ManageTasks />} />
              <Route path="/admin/create-task" element={<CreateTask />} />
              <Route path="/admin/users" element={<ManageUsers />} />

            </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;