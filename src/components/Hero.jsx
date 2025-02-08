import Navbar from "./Navbar";
import Button from "./Button";
import image from "../assets/hero-img.png"
import image2 from "../assets/hero-img2.png"
 

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#012F66]">
        <Navbar />
        <div className="mx-12 mt-20">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl">
            Save Thousands By Getting a Home Loan At Interest Rates You Can't Beat
          </h1>
          <p className="text-[#ffff] mt-6">
            Whether you are purchasing, building, refinancing or taking cash out of your home, our <br /> mortgage 
            loan brokers are here to help you find the best deal.
          </p>
          <Button 
            label="Calculate your loan Rates"
            className="bg-white px-7 mt-4 py-2 rounded-md cursor-pointer hover:bg-white/75 
            hover:translate-y-1 transition delay-200 ease-in-out"
          />
        </div>
        <div className="w-full mt-8 mx-4 flex space-x-6 pb-8">
          <img 
            src={image} 
            alt="hero image" 
            className="w-[68%]  hover:-translate-y-1 transition delay-200 ease-in-out"
          />
          <img 
            src={image2}
            alt="hero image"
            className="w-[30%] rounded-tl-4xl rounded-bl-4xl hover:-translate-y-1 transition delay-200 
            ease-in-out"
          />
        </div>
    </section>
  )
}

export default Hero