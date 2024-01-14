import VideoImg from "../../images/choose-us/main-img.jpg";
import TitleRed from "../../images/pricing/title-bg(1final).svg";
import TrainingIcon from "../../images/who-we-are/gardener.png";
import EquipmentsIcon from "../../images/who-we-are/pest-control.png";
import BagIcon from "../../images/who-we-are/water-spray.png";
import BottleIcon from "../../images/choose-us/sustainability.png";
import PlayImg from "../../images/choose-us/play.png";
import MainButton from "../MainButton";

const ChooseUs = () => {
  const youtubeVideoUrl = 'https://youtu.be/YAIJ1ZwqsV8?si=vLmNRa-xi3MV3jd3';




  return (
    <>
      <section className="choose-section py-[12rem] ">
        <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
          <div className="video-div relative w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center">
           
             <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer">
        <img src={VideoImg} alt="Video Thumbnail" />
        className="relative w-[94%] h-auto"
      </a>




   <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={PlayImg}
              alt="play_img"
              className="absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer min450:left-[47%] min450:top-[44%] "
            /> </a>
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span>
          </div>

          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              why choose us
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[22rem] absolute -top-[6px] -left-14 md1000:hidden "
            />
            <h2 className=" text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
            Our Company works on resolving the problems
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
              At <b>Agrofarms</b>, We are addressing the problems of Farmers Facing in spraying.Finding the labourer for the spraying the fields is challenging.Providing Appropriate Technology to help
people's lives is our main vision. Together
with Agro Farm Machinery Sales
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              <div className="flex items-center gap-6">
                <img
                  className="bg-[#4CAF50] hover:bg-[#FFC107] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                Precision Spraying Technology
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#4CAF50] hover:bg-[#FFC107] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                Advanced Spatying Solutions
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#4CAF50] hover:bg-[#FFC107] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                Efficient Crop Spraying
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#4CAF50] hover:bg-[#FFC107] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                Able to compete globally
                </p>
              </div>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#FFC107]`}
                text="our products"
                arrowColor={`!text-white`}
                cN="choose-cta"
                hover={`hover:bg-[#4CAF50]`}
                goTo="/pricing"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
