import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Info } from './pages/infos';
import { Login } from './pages/login';
import 'antd/dist/antd.css'
import ContentProvider from './context/elements';

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Info />}></Route>
          </Routes>
        </Router>
      </ContentProvider>
    </div>
  );
}

export default App;
