import Titles from "./Titles";
import { Subtitles } from "./Subtitles";
import ButtonAboutMe from "./ButtonAboutMe";



 
const works = [
  {
    date: "January 2021 - Present",
    worktitle: "Freelance Web Development",
    backgroundPelotita: "bg-purple",
    description:
      "Creation of custom websites and web applications using WordPress, Elementor, Figma, and Photoshop",
  },
  {
    date: "December 2023 - March 2024",
    worktitle: "Webmaster - Dilo Club",
    backgroundPelotita: "bg-yellow",
    description:
      "Part-time work where the academy's website was created, along with the creation of the brand Tubachi's image and website",
  },
  {
    date: "August 2023 - March 2024",
    worktitle: "Webmaster | Community Manager - The Pole Garage",
    backgroundPelotita: "bg-yellow",
    description:
      "Website creation, image and content creation for social media, responsible for customer service.",
  },
];

const WorkExperiencie = () => {

  return (
    <div className="mb-[100px] mx-[20px] lg:px-[100px] 2xl:px-[150px] max-w-[1920px] 2xl:mx-auto">
      <div className=" flex flex-col lg:flex-row    lg:gap-44 lg:justify-between ">
        <div className="max-w-[207px] lg:max-w-[277px]">
          <Titles text="Work experience" customClass="text-left" />
        </div>
        <div className=" ">
          <Subtitles
            text="To learn more about the skills and experience that make these results possible, I invite you to explore the About Me page. There you can discover in detail my professional background, the technologies I master and how each project reflects my commitment to excellence."
            customClass="leading-[171%] text-black mt-2 lg:max-w-[838px]"
          />
          <ButtonAboutMe />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-12 mt-24  ">
        {works.map(({ date, worktitle, description,backgroundPelotita }) => (
          <div className="bg-black rounded-[35px] p-[32px] h-full flex flex-col">
            <div className="flex justify-between items-center">
              <div className={` ${backgroundPelotita} w-[14px] h-[14px] rounded-full mr-4`}></div>
              <p className="font-medium text-[13px] text-[#929292]">{date}</p>
            </div>
            <h2 className="font-semibold text-[19px] md:text-[24px] leading-[150%] text-white mt-[24px]">
              {worktitle}
            </h2>
            <h3 className="font-light text-white/60 text-[16px] mt-[36px] lg:text-[18px] ">
              {description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperiencie;
