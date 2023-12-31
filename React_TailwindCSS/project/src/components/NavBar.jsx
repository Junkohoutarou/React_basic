import React from "react";
import { Link } from "react-scroll";
import {BiRestaurant} from "react-icons/bi";
function NavBar() {
  return (
    <div className="fixed w-full">
      <div className="flex flex-row justify-between md:px-32  bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <div>
            <span>
                <BiRestaurant size={40}/>
            </span>
            <h1 className="text-xl font-semibold">Foody</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Dishes
            </Link>
            <Link
              to="Dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Reviews
            </Link>
            <Link>
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            </link>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
