import Logo from "./Logo";
import MenuBtn from "./menuBtn";
import Nav from "./Nav";

function Navbar() {
  return (
    <nav className="bg-lightPink sticky top-0 z-20 mx-auto flex w-full items-center justify-between h-16 p-3">
      <Logo />
      <div className="flex items-center gap-4 ">
        <MenuBtn />
        <Nav />
      </div>
    </nav>
  );
}

export default Navbar;
