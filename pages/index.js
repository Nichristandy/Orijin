import EmailInput from "@/Components/EmailInput";
import Navbar from "@/Components/Navbar";
import { Rubik, Lato } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="w-full">
      {/* hero section */}
      <div className="w-full px-3 md:px-5 lg:px-10 ">
        <div className="w-full h-full border-r border-l border-primary border-opacity-20">
          <Navbar />
          {/* textbox hero */}
          <div className="w-full flex flex-col mt-6 gap-4 px-[18px] md:px-12 lg:px-0 md:mt-20 lg:mt-32 lg:gap-[60px] lg:ml-[75px] relative z-10">
            <h1
              className={`text-2xl uppercase font-bold   w-[80%] md:w-full md:text-4xl lg:text-7xl text-secondary ${rubik.className}`}
            >
              An environment <span className="text-primary">that speaks</span>
            </h1>
            {/* body text and email input */}
            <div className="w-full flex flex-col gap-8">
              <p
                className={`text-xs opacity-50 w-full  md:text-base md:w-3/5 lg:w-[32%] ${lato.className}`}
              >
                {" "}
                It whispers stories of inspiration, inviting individuals to
                embark on a journey of discovery. Through thoughtful design
                choices, harmonious elements, and purposeful details, we curate
                spaces that communicate, evoke emotions, and leave a lasting
                impact.
              </p>
              <div className="w-8/12 md:w-4/5 lg:w-2/5">
                <EmailInput />
              </div>
            </div>
          </div>
          <img
            src="../Chair-1.png"
            className="object-cover h-auto   object-center ml-auto -mt-20 md:-mt-[19rem] md:w-7/12 lg:-mt-96 lg:w-auto "
          />
        </div>
      </div>
      {/* description */}
      <div className="w-full md:px-5 lg:px-10 ">
        <div className="w-full  h-full border-r border-l border-primary border-opacity-20  md:px-4 lg:px-8">
          {/* desktop */}
          <div className="bg-secondary rounded-[20px] hidden md:flex">
            {/* sisi kiri */}
            <div
              className={`flex flex-col border-r border-primary  md:w-5/12 md:pl-6 md:pt-6 md:pb-8 md:pr-4 lg:pl-12 lg:pt-12 lg:pb-16 lg:pr-8 ${lato.className}`}
            >
              <div className="flex flex-col w-full text-white opacity-60">
                <span>
                  At our design firm, our mission is to create{" "}
                  <span className="text-primary">captivating ambience</span>{" "}
                  that transcends ordinary spaces and immerses individuals in a
                  world of enchantment. We believe that every environment has a
                  story to tell, and through our meticulous attention to detail,
                  innovative concepts, and thoughtful execution, we craft
                  immersive experiences that engage the senses and leave a
                  lasting impression. From the harmonious play of light and
                  shadow to the careful selection of textures and materials, we
                  curate an atmosphere that captivates and inspires, inviting
                  individuals to embark on a sensory journey where beauty and
                  functionality intertwine.
                </span>
                <span className="mt-2">
                  With every project, we strive to design an ambience that not
                  only captures attention but also speaks to the heart, evoking
                  emotions and transforming spaces into extraordinary realms of
                  wonder.
                </span>
              </div>

              <div className="flex flex-row items-center md:mt-6 md:gap-10 lg:mt-12 lg:gap-20">
                <div className="flex flex-col items-start md:gap-4 lg:gap-8 opacity-100">
                  <div className="flex flex-row gap-2">
                    <img src="../arrow-orange.svg" className="w-6 h-6"></img>
                    <span className="text-white">Creativity</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="../arrow-orange.svg" className="w-6 h-6"></img>
                    <span className="text-white">Quality</span>
                  </div>
                </div>

                <div className="flex flex-col items-start md:gap-4 lg:gap-8 opacity-100">
                  <div className="flex flex-row gap-2">
                    <img src="../arrow-orange.svg" className="w-6 h-6"></img>
                    <span className="text-white">Collaboration</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <img src="../arrow-orange.svg" className="w-6 h-6"></img>
                    <span className="text-white">Sustainability</span>
                  </div>
                </div>
              </div>
            </div>
            {/* sisi kanan */}

            <div className={`flex flex-col md:w-7/12 ${lato.className}`}>
              {/* row 1 */}
              <div
                className={`uppercase border-b-primary border-b font-bold md:text-2xl md:pl-4 md:pr-6 md:py-12 lg:pl-8 lg:pr-12 lg:py-[75px] lg:text-4xl ${rubik.className}`}
              >
                <span className="text-white">
                  stirs <span className="text-primary">emotions</span> and{" "}
                  <span className="text-primary">embraces</span> the essence of
                  its inhabitants.
                </span>
              </div>
              {/* row 2 */}
              <div className="border-primary border-b md:pl-8 md:pr-8 md:py-8">
                <div className="w-full flex flex-row items-start lg:gap-6">
                  <div className="flex flex-col w-6/12 gap-2 text-white">
                    <h3 className="font-bold">Our origin made of.</h3>
                    <span className="opacity-60 font-normal">
                      We appoint multi-talented professionals who are passionate
                      about innovation, research, and developing a projects.
                    </span>
                  </div>
                  <div className="flex flex-col w-7/12 gap-2 text-white">
                    <h3 className="font-bold">Sculpting the origin</h3>
                    <span className="opacity-60 font-normal">
                      Our vision is constantly innovating, guided by our
                      client's dream of creating a masterpiece from a brief, to
                      discovering surprising possibilities.
                    </span>
                  </div>
                </div>
              </div>
              {/* row 3 */}
              <div className="w-full h-full flex flex-row">
                {/* tulisan */}
                <div className="border-r border-primary md:w-7/12 md:pl-8 md:pt-8 md:pb-12 ">
                  <div className="flex flex-col w-[90%] gap-2 text-white">
                    <h3 className="font-bold">
                      Progressive work that stands out for its simplicity.
                    </h3>
                    <span className="opacity-60 font-normal">
                      We really pay attention to every element that is applied
                      in a design, from material, texture, shape, to function.
                      We believe every aspect has its own standard.
                    </span>
                  </div>
                </div>
                {/* mouse  */}
                <div className=" md:w-5/12 md:px-12 md:pt-8">
                  <div className="flex flex-col items-center gap-6">
                    <h3
                      className={`uppercase font-bold text-center text-white ${rubik.className}`}
                    >
                      Take a peek of our latest projects
                    </h3>
                    <img src="../Mouse.svg" className="w-6 h-6"></img>
                    <p className="text-primary">Scroll Down</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="bg-secondary py-[60px] flex flex-col md:hidden">
            {/* header */}
            <div
              className={`px-[28px] pb-[30px] font-bold uppercase text-lg border-b border-primary ${rubik.className}`}
            >
              <span className="text-white w-full">
                stirs <span className="text-primary">emotions</span> and{" "}
                <span className="text-primary">embraces</span> the essence of
                its inhabitants.
              </span>
            </div>
            {/* content */}
            <div className="flex flex-col gap-14 pb-8 border-b border-primary">
              <div
                className={`px-[28px] pt-[30px] w-full flex flex-col items-start ${lato.className}`}
              >
                <div className="flex flex-col w-9/12 gap-2 text-white">
                  <h3 className="font-bold">Our origin made of.</h3>
                  <span className="opacity-60 font-normal">
                    We appoint multi-talented professionals who are passionate
                    about innovation, research, and developing a projects.
                  </span>
                </div>
              </div>
              <div
                className={`px-[28px] pt-[30px] w-full flex flex-col items-end ${lato.className}`}
              >
                <div className="flex flex-col text-end w-10/12 gap-2 text-white">
                  <h3 className="font-bold">Sculpting the origin</h3>
                  <span className="opacity-60 font-normal">
                    Our vision is constantly innovating, guided by our client's
                    dream of creating a masterpiece from a brief, to discovering
                    surprising possibilities
                  </span>
                </div>
              </div>

              <div
                className={`px-[28px] pt-[30px] w-full flex flex-col items-start ${lato.className}`}
              >
                <div className="flex flex-col w-9/12 gap-2 text-white">
                  <h3 className="font-bold">
                    Progressive work that stands out for its simplicity.
                  </h3>
                  <span className="opacity-60 font-normal">
                    We really pay attention to every element that is applied in
                    a design, from material, texture, shape, to function. We
                    believe every aspect has its own standard.
                  </span>
                </div>
              </div>
            </div>
            {/* Mouse */}
            <div className="w-full flex pt-[60px] justify-center items-center">
                  <div className="flex flex-col items-center w-[50%] gap-6">
                    <h3
                      className={`uppercase font-bold text-center text-white ${rubik.className}`}
                    >
                      Take a peek of our latest projects
                    </h3>
                    <img src="../Mouse.svg" className="w-6 h-6"></img>
                    <p className="text-primary">Scroll Down</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
