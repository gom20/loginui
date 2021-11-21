import '../App.css';
import Header from './Header';
import { Route, Routes} from 'react-router-dom';
import { Home, Login, Join, Info } from '../pages'

function App() {
  return (
    <div className="App">  
        <Header/>
        <div>
          <Routes>
            <Route exact ={true} path="/" element={<Home/>}/>
            <Route path="/join" element={<Join/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/info" element={<Info/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
