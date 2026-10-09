import { Link } from "react-router-dom";
import useLocation from "../hooks/uselocation";

function Navbar() {

    const { pathname } = useLocation();

    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b">

            <h1 className="text-2xl font-bold">
                My Products
            </h1>

            <div className="flex gap-6">

                <Link
                    to="/products"
                    className={
                        pathname === "/products"
                            ? "font-bold underline"
                            : ""
                    }
                >
                    Products
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;