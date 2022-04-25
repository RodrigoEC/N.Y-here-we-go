import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Info } from './pages/infos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login'></Route>
          <Route path='/' element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
