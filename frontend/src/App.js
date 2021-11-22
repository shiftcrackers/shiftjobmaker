import logo from './logo.svg';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './view/Test';
import UserList from './component/user/UserList';
import AddUser from './component/user/AddUser';
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;