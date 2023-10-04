import React from 'react';
import {BsFillPersonFill} from "react-icons/bs";
import {BsBarChartLine} from "react-icons/bs";
import {BsBasket} from "react-icons/bs";
import { useState } from 'react';
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-green-500">
      <div className="container flex w-full items-center justify-between">
        <a className="text-white text-2xl font-bold" href="/">
          Bicycle Exchange
        </a>
        <div className="flex items-center justify-end">
          <div class="flex items-center">
            <BsBasket/>
            <a href="/" className="text-white hover:underline">Cart</a>
          </div>
          <div class="">
            <button className="text-white hover:underline" onClick={() => setToggle((prev)=>!(prev))}>
              Name
            </button>
          </div>
        </div>
      </div>
      {toggle && <div className='dropdown-menu'>
        <ul className="list-none space-x-4">
          <DropdownItem img={<BsFillPersonFill/>} text={"Profile"}/>
          <DropdownItem img={<BsBarChartLine/>} text={"Settings"}/>
        </ul>
      </div>}
    </nav>
  );
}

function DropdownItem(args){
  return(
    <li className="dropdownItem">
      <div>
      <a className="flex" href="/">{args.img} {args.text}</a>
      </div>
    </li>
  );
}

export default Navbar;