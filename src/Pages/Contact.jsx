import Footer from "../components/Footer/Footer";
import MainButton from "../components/MainButton";

function Login() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
            AgroFarms: Transforming Agriculture, One Tool at a Time.

            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
            Get in touch with us at AgroFarms! We're here to assist you with any inquiries, whether it's about quantities, suggestions, or providing your delivery address.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">
                Chintalapadu Village , Andhrapradesh
                </h3>
                <span className="bg-[#4caf50] w-[50px] h-[4px] absolute top-[60px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                Chintalapadu Village 
                  <br /> Andhrapradesh , India
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
                <span className="bg-[#4caf50] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>24/7</p>
                  
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#4caf50] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+91-9948053104</p>
                  <p>&nbsp; sskmuntaz210@gmail.com</p>
                </div>
              </div>
              {/*  */}
              
            </div>
          </div>

          {/* second col ---*/}
          <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#4caf50] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Quantity</option>
              <option>1</option>
              <option>2</option>
              <option>2 & more</option>
              
            </select>
            <textarea
              placeholder="Address"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            
            
           <MainButton
                color={`!text-white`}
                bg={`bg-[#4CAF50]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FFC107]`}
                text="Submit"
                goTo="https://forms.gle/3kG9gPigxcJGrqzy5"
              />
            
            
          </form>
        </div>

      
       
        <Footer />
      </section>
    </>
  );
}

export default Login;
