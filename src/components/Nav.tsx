import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  isMobile: boolean;
}

function NavLinks({ isMobile }: NavLinksProps) {
  if (isMobile) {
    return (
      <div className="navItems md:flex md:flex-col flex-row gap-8 text-sm md:text-lg font-normal font-poppins hidden">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/frida">Cafe Frida</NavLink>
        <NavLink className="text-hotPink" to="/menu">
          Order Online
        </NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </div>
    );
  } else {
    return (
      <div className="navItems flex flex-row gap-8 text-sm md:text-lg font-normal font-poppins">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/frida">Cafe Frida</NavLink>
        <NavLink className="text-hotPink" to="/menu">
          Order Online
        </NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </div>
    );
  }
}

interface FullNavProps {
  isOpen: boolean;
}

function FullNav({ isOpen }: FullNavProps) {
  return (
    <div
      className={
        isOpen
          ? "fullnav fixed md:hidden w-screen h-screen -z-10 bg-lightPink left-0 top-0 duration-500 ease-in-out"
          : "fullnav fixed md:hidden w-screen h-screen -z-10 -translate-y-full bg-lightPink left-0 top-0 duration-500 ease-in-out"
      }
    ></div>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="">
      <div>
        <NavLinks isMobile={isMobile} />
        <div
          onClick={toggleNavbar}
          className="burger md:hidden flex-col gap-1 hover:cursor-pointer flex"
        >
          <div className="px-3 py-0.5 rounded-xl bg-black"></div>
          <div className="px-3 py-0.5 rounded-xl bg-black"></div>
          <div className="px-3 py-0.5 rounded-xl bg-black"></div>
        </div>
      </div>
      <div>
        <FullNav isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default Nav;
