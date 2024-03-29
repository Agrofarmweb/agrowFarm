import { Link } from "react-router-dom";
import TitleBg from "../../images/pricing/title-bg(1final).svg";
import MainButton from "../MainButton";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
      >
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
          >
            <p className="text-black text-[13px] uppercase font-medium relative z-10 pl-16 min800:pl-0 mb-8">
              Buy Our Products
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className=" w-[52%] absolute -top-3 title-white min800:w-[24rem] "
            />
            <h1 className="font-bold text-[49px] uppercase mb-[4rem] min450:text-[40px]">
            Grow Smart,<br />
              <span className="font-thin"> Farm Easy </span>
            </h1>

            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Explore Products"
              goTo="/pricing"
            />
          </div>
        </div>
        {/* socials */}
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">call</p>
          <span className="w-[35px] bg-[#4CAF50] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
           
          <Link to="/contact"><i class="fa rotate-90 hover:text-[#FFC107] fa-phone text-3xl cursor-pointer ease-in duration-200" ></i></Link> 
            <Link to ="https://youtu.be/YAIJ1ZwqsV8?si=vLmNRa-xi3MV3jd3"><i className="fa-brands rotate-90 hover:text-[#FFC107] fa-youtube text-3xl cursor-pointer ease-in duration-200"></i></Link>
            <Link to = "/contact"><i className="fa-brands rotate-90 hover:text-[#FFC107] fa-whatsapp text-3xl cursor-pointer ease-in duration-200 "></i></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;