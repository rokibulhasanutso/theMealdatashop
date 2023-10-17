import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" bg-slate-200">
            <nav className="container mx-auto flex justify-between py-5">
                {/* logo */}
                <div className="text-4xl">
                    <Link to='/themealdb'>The Meal DB</Link>
                </div>

                <div className="flex space-x-2">
                    <NavLink 
                        to={'/themealdb'}
                        className={({isActive}) => 
                            isActive ? 'text-white bg-red-600 px-5 py-2.5' : 'bg-transparent px-5 py-2.5 text-red-600'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to={'/'}
                        className={({isActive}) => 
                            isActive ? 'text-white bg-red-600 px-5 py-2.5' : 'bg-transparent px-5 py-2.5 text-red-600'
                        }
                    >
                        Kanye
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;