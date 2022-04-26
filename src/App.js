import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Info } from './pages/infos';
import { Login } from './pages/login';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
