import '../App.css';
import Header from './Header';
import { Route, Routes} from 'react-router-dom';
import { Home, Login, Join } from '../pages'

function App() {
  return (
    <div className="App">  
        <Header/>
        <div>
          <Routes>
            <Route exact ={true} path="/" element={<Home/>}/>
            <Route path="/join" element={<Join/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
