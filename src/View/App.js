import './App.css';
import Home from './Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from '../Components/Login';
import { Route, Routes } from 'react-router-dom';
import path from '../Components/Path';
import Profile from '../Components/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={path.Login} element={<Login toast={toast} />} />
                <Route path={path.Home} element={<Home />} />
                <Route path={path.Profile} element={<Profile toast={toast} />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                // pauseOnHover
                theme="colored"
            />
        </div>
    );
}

export default App;
