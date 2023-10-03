import React from 'react';
import {BsFillPersonFill} from "react-icons/bs";
import {BsBarChartLine} from "react-icons/bs";
import {BsBasket} from "react-icons/bs";
function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-2xl font-bold" href="/">
          My Website
        </a>
        <ul className="space-x-4 block">
          <li>
            <img src={BsBasket} alt="checkout"></img>
            <a href="/" className="text-white hover:underline">Cart</a>
          </li>
          <li>
            <button className="text-white hover:underline">Name</button>
            <div className="dropdown-menu">
              <ul className="space-x-4">
                <DropdownItem img={<BsFillPersonFill/>} text={"Profile"}/>
                <DropdownItem img={<BsBarChartLine/>} text={"Settings"}/>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function DropdownItem(props){
  return(
    <li className= "dropdownItem">
      <div className="block">
      <a href="/">{props.img} {props.text}</a>
      </div>
    </li>
  );
}

export default Navbar;