import logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full absolute ">
      <div className="mx-6 flex justify-between items-center gap-5 mt-4">

        <div className="text-white flex items-center gap-3">
            <img 
                src={logo} 
                alt="logo" 
                width={40}
                height={40}
            />
            <p className="text-l ">Summit Lending </p>
        </div>

        <div className="flex ">
            <ul className="space-x-5 text-base">
                <a  className="text-white/70 hover:text-white " href="">Home</a>
                <a  className="text-white/70 hover:text-white " href="">MortgageLoans</a>
                <a  className="text-white/70 hover:text-white " href="">Purchase</a>
                <a  className="text-white/70 hover:text-white " href="">Refinance</a>
            </ul>
            <div className="relative flex justify-center items-center ">

              <Button 
                  label="Apply Now"
                  className="text-black border px-5 py-1 rounded-md"
              />
              <div className="absolute bg-white w-40 h-14 inset-0 -z-1 rounded-bl-4xl rounded-bottom-right-4xl">

              </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar