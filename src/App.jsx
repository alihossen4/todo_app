import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/admin/Dashboard";
import ManageTasks from "./pages/admin/ManageTasks";
import CreateTask from "./pages/admin/CreateTask";
import ManageUsers from "./pages/admin/ManageUsers";
import PrivateRoute from "./routes/PrivateRoute";
import MyTasks from "./pages/user/MyTasks";
import UserDashboard from "./pages/user/UserDashboard";
const App =() =>{
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
            <Route element={<PrivateRoute allowedRoles={["admin"]}/>} >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/tasks" element={<ManageTasks />} />
              <Route path="/admin/create-task" element={<CreateTask />} />
              <Route path="/admin/users" element={<ManageUsers />} />
            </Route>

            <Route element={<PrivateRoute allowedRoles={["admin"]}/>} >
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/my-tasks" element={<MyTasks/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;