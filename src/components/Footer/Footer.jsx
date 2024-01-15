import FooterLogo from "../../images/logo/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                
Rooted in Excellence, Cultivating Tomorrow – AgroFarms, Your Partner in Agricultural Innovation.
              </p>
      {/*        
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div> */}
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} AgroFarms <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  Snehashish Gaikwad
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Contact</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#4caf50]"></span>

              <p className="text-[16px] hover:text-[#FFC107] cursor-pointer text-[#646464] font-medium hover:font-bold">
              sskmuntaz210@gmail.com
              </p>
              <p className="text-[16px] hover:text-[#FFC107] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Call:+91-9948053104
              </p>
              <p className="text-[16px] hover:text-[#FFC107] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Location:Chintalapadu Village , Andhrapradesh
              </p>
             
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Social Media</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#4caf50]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Whatsapp
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
               +91-9948053104
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Gmail</p>
              <p className="text-[16px] text-[#646464] font-medium">
             sskmuntaz210@gmail.com
              </p>
              
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
