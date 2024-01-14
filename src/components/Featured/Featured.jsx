import TitleRed from "../../images/pricing/title-bg(1final).svg";
import MainButton from "../MainButton";
import Target from "../../images/AboutPage/comment.png";
import Mountain from "../../images/AboutPage/eco-services.png";
import Img3 from "../../images/AboutPage/5.jpg";
import Img4 from "../../images/AboutPage/4.png";



function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          {/* title */}
          <div className="flex flex-col text-center items-center relative ">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
            Our Company
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[24rem] absolute -top-[10px]"
            />
            <h2 className="text-[3.6rem] text-black font-bold my-10">
              A+ Rated by POSHAN Incubator
            </h2>
          </div>
          {/* grid */}
                      {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our Message</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Providing Appropriate Technology to help
                  people's lives is our main vision. Together
                    with Fauget Tech, We Create a Better and
                  Sustainable India G20 for Agritech needs.What we provide will have a good impact
          on your company but will not damage the
                  environment.Technological progress is something
        that we cannot stop.


                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our Service</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Providing Appropriate
Technology to help
farmer’s lives is our
main vision. Reduces the Farmers Efforts
and labourer to work on and
reduces the time and
increases the productivity.Very Less Consumption oil
especially as the oil prices got
hiked.Cost is very much affordable

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured cta */}
      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#4CAF50] ">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-12  md1000:text-center">
            <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 leading-[1.2] min450:text-[2.4rem] ">
            Harvesting Excellence: Tools Tailored for You
            </h2>
            <MainButton
                color={`!text-white`}
                bg={`bg-[#FFC107]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#4CAF50]`}
                text="join us"
                goTo="/contact"
              />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
