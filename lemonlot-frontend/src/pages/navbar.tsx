// Navbar component using Tailwind CSS

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-100 border-b border-gray-200 p-4">
                <div className="container flex justify-between">
                    <div className="flex space-x-10">
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/search"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Search
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            to="/register-user"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;