import Link from "next/link";
import imgFinalDesk from "../assets/images/letstalk.svg";
import imgFinalmobile from "../assets/images/letstalkM.svg";
import Image from "next/image";
const FinalSection = () => {
  return (
    <div className="BackgroundNoise ">
      <div className="max-w-[1920px] m-auto flex flex-col sm:flex-row px-[20px] lg:px-[100px] 2xl:px-[150px] mb-10 items-center py-16 ">
        <Image
          src={imgFinalmobile}
          alt="forma decorativa"
          className=" -mt-10 lg:hidden"
        />
        <Image
          src={imgFinalDesk}
          alt="forma decorativa"
          className=" -mt-10 hidden lg:block lg:mr-10"
        />

        <div className="">
          <h5 className="text-[20px] lg:text-[24px]">
            If you're looking for innovative and personalized web solutions, I'm
            here to bring your ideas to life. Feel free to shoot me an email,
            visit my LinkedIn profile, or click the button below to chat with me
            on WhatsApp. Let’s make your project a success! 😊😊
          </h5>
          <div className="mt-8">
            <Link
              href="https://api.whatsapp.com/send/?phone=573133207188&text&type=phone_number&app_absent=0"
              target="_blank"
              className="bg-black text-white py-[16px] px-[42px] rounded-[35px] mt-14 hover:bg-purple transition-all duration-300"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
