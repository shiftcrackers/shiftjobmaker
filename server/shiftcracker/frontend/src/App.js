import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./component/user/UserList";
import AddUser from "./component/user/AddUser";
import Sample from "./component/sample/Sample";
import Login from "./component/user/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
