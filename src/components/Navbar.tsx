import { Link } from "react-router-dom";
import logo from "/all-together-logo.png";

const Navbar = () => {
  return (
    <div className="bg-black fixed top-0 w-full z-50">
      <nav className="container m-auto p-4 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img className="h-4 md:h-5" src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
            <Link className="text-white text-lg md:text-xl font-semibold mr-4 md:mr-6" to="/login">Login</Link>
            <Link className="text-white text-lg md:text-xl font-semibold" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
