import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

  // function to updata mobile menu status
  const [nav, setNav] = useState(false);
  // function to toggle mobile menu
  const toggleNav = () => {
    setNav(!nav);
  }


  return (
    <nav className="w-full ">
      <div className="mx-12 flex justify-between items-center gap-5 pt-5">

        <div className="text-white flex items-center gap-3">
            <img 
                src={logo} 
                alt="logo" 
                width={40}
                height={40}
            />
            <p className="text-l ">Summit Lending </p>
        </div>

        <div className="md:flex hidden">
            <ul className="space-x-5 text-base">
                <a  className="text-white/75 hover:text-white " href="#">Home</a>
                <a  className="text-white/75 hover:text-white " href="#">MortgageLoans</a>
                <a  className="text-white/75 hover:text-white " href="#">Purchase</a>
                <a  className="text-white/75 hover:text-white " href="#">Refinance</a>
            </ul>
            <div className="ml-4">

              <Button 
                  label="Apply Now"
                  className="text-black border px-5 py-1 rounded-md hidden lg:block"
              />
          
            </div>
      
        </div>
        <button onClick={toggleNav} className="flex md:hidden text-white">
              {nav ? (<IoMdCloseCircle size={30} /> ) : (<IoMenuSharp size={30} />)}
        </button>
      </div>
      {nav && (
        <div className="md:hidden flex w-full h-screen left-0 top-20 bg-white/10 justify-center items-center
        flex-col">
          <ul className="space-y-5 text-xl flex flex-col font-bold">
              <a  className="text-white/75 hover:text-white " href="#">Home</a>
              <a  className="text-white/75 hover:text-white " href="#">MortgageLoans</a>
              <a  className="text-white/75 hover:text-white " href="#">Purchase</a>
              <a  className="text-white/75 hover:text-white " href="#">Refinance</a>
          </ul>
          <div className="">

            <Button 
                label="Apply Now"
                className="text-black border px-8 py-1 rounded-md flex lg:hidden mt-6"
            />
        
          </div>
    
         </div>
      ) }
    </nav>
  )
}

export default Navbar