// Navbar component using Tailwind CSS

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-100 border-b border-gray-200 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register-user"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Register User
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;