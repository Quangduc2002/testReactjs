import './App.css';
import Home from './Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from '../Components/Login';
import { Route, Routes } from 'react-router-dom';
import path from '../Components/Path';
import Profile from '../Components/Profile';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={path.Login} element={<Login />} />
                <Route path={path.Home} element={<Home />} />
                <Route path={path.Profile} element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
