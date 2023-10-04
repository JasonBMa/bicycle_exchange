import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import { useState } from 'react';
import bike from './images/bike.svg';
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const signedIn = false;
  return (
    <div className="flex w-full p-5 justify-center ">
      <nav className="bg-blue-400 p-5 w-5/6 shadow-lg rounded-md align-middle">
        <div className="flex items-center justify-between">
          <a className="flex text-white text-2xl font-bold" href="/">
            <img class="w-10 h-10 mr-2 invert hover:animate-spin fill-primary" alt="bike" src={bike}></img>
            Rent A Bike
          </a>
          <div className="flex text-lg font-medium">
            <div>
              <button className="pl-3 text-white" onClick={() => setToggle((prev)=>!(prev))}>
                Create Listing
              </button>
            </div>
            <div className="flex px-3">
              <a href="/"className="flex ml-1 text-white hover:underline"> <BsBasket style={{color: 'white', fontSize: '20px'}}/> Cart</a>
            </div>
            <div className="animate-pulse">
              <button className="pl-3 text-white" onClick={() => setToggle((prev)=>!(prev))}>
                {signedIn ? "Name" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
        {toggle && <div className='dropdown-menu w-full justify-end'>
          <ul className="flex flex-col list-none w-1/5 ">
            <DropdownItem img={<BsFillPersonFill/>} text={"Profile"}/>
            <DropdownItem img={<BsBarChartLine/>} text={"Settings"}/>
            <DropdownItem img={<BsBarChartLine/>} text={"Support"}/>
          </ul>
        </div>}
      </nav>
    </div>
  );
}

function DropdownItem(args){
  return(
    <li className="dropdownItem text-white">
      <div>
      <a className="flex" href="/">{args.img} {args.text}</a>
      </div>
    </li>
  );
}

export default Navbar;