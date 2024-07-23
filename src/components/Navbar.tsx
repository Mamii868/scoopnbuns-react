import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-lightPink sticky top-0 z-20 mx-auto flex w-full items-center justify-between h-16">
      <Logo />
      <div className="navItems flex gap-8">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/frida">Cafe Frida</NavLink>
        <NavLink className="text-hotPink" to="/menu">
          Order Online
        </NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </div>
      <a className="button">
        <button>Open Menu</button>
      </a>
    </nav>
  );
}

export default Navbar;
