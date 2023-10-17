import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const TheMealBd = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default TheMealBd;