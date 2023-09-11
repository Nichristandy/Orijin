import Image from "next/image";
import { Inter } from "next/font/google";
import { Rubik, Lato } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import EmailInput from "@/components/button/EmailInput";
import Footer from "@/components/layout/Footer";
import Carousel from "@/components/Carousel";

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
    <div className="w-full max-w-screen-sm md:max-w-screen-lg">
      <div className="w-full px-3 md:px-10 overflow-hidden md:overflow-auto">
        <div className="w-full flex flex-col bg-white border-r border-l border-amber-600 border-opacity-20">
          <div className="w-[1px] h-[1000px] bg-[#DF7A20] opacity-20 absolute left-[50%] z-0"></div>
          <Navbar />
          {/* Hero section */}
          <div className="w-full  h-[471px]  md:h-[600px] mt-8 lg:mt-4">
            <img
              src="../Chair-1.png"
              className="ml-auto hidden md:block md:object w-auto h-[321px] md:h-[600px]  object-cover object-center"
            />
            <div className=" md:-mt-[500px] sticky z-10 ml-[18px] md:ml-[75px]">
              <span
                className={`font-bold w-[257px] md:w-full text-2xl md:text-7xl bg-none uppercase ${rubik.className}`}
              >
                An environment               <span
                className={`text-amber-600 font-bold w-[257px] md:w-full text-2xl md:text-7xl bg-none uppercase ${rubik.className}`}
              >that speaks</span>
              </span>
              <div
                className={`text-[13px] opacity-50 md:text-base w-[330px] md:w-[460px] mt-[13px] lg:mt-14 lg:pt-1 ${lato.className}`}
              >
                It whispers stories of inspiration, inviting individuals to
                embark on a journey of discovery. Through thoughtful design
                choices, harmonious elements, and purposeful details, we curate
                spaces that communicate, evoke emotions, and leave a lasting
                impact.
              </div>
              <div className="mt-8">
                <img
                  src="../Chair-1.png"
                  className="ml-auto md:hidden -mt-[50px] object w-auto h-[321px] md:h-[600px]  object-cover bg-cover bg-clip-content object-center"
                />
                <div className="w-7/12 md:w-1/2 sticky z-10   -mt-64 lg:-mt-0">
                  <EmailInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div id="about" className="w-full sticky z-10 md:px-10">
        <div className="w-full flex flex-col bg-white md:border-r md:border-l md:border-amber-600 md:border-opacity-20">
          <div className="w-full md:px-8">
            <div className="w-full md:rounded-xl bg-[#212B31] md:pl-12">
              <div className="flex flex-col md:flex-row w-full ">
                {/* sisi kiri */}
                <div
                  className={`hidden md:flex flex-col font-lato border-r border-r-amber-600 text-[#71777b] lg:w-2/5 ml-7 ${lato.className}`}
                >
                  <div className="w-full py-12 pr-8">
                    <p className="lg:w-10/12">
                      At our design firm, our mission is to create{" "}
                      <span className="text-[#DF7A20]">
                        captivating ambience
                      </span>{" "}
                      that transcends ordinary spaces and immerses individuals
                      in a world of enchantment. We believe that every
                      environment has a story to tell, and through our
                      meticulous attention to detail, innovative concepts, and
                      thoughtful execution, we craft immersive experiences that
                      engage the senses and leave a lasting impression. From the
                      harmonious play of light and shadow to the careful
                      selection of textures and materials, we curate an
                      atmosphere that captivates and inspires, inviting
                      individuals to embark on a sensory journey where beauty
                      and functionality intertwine.
                    </p>
                    <p className="lg:w-10/12 mt-2">
                      With every project, we strive to design an ambience that
                      not only captures attention but also speaks to the heart,
                      evoking emotions and transforming spaces into
                      extraordinary realms of wonder.
                    </p>

                    <div className="flex flex-row mt-12 lg:w-10/12 items-center justify-between">
                      <div className="flex flex-row space-x-2">
                        <img
                          src="../arrow-orange.svg"
                          className="w-6 h-6"
                        ></img>
                        <span className="text-white">Creativity</span>
                      </div>
                      <div className="flex flex-row space-x-2">
                        <img
                          src="../arrow-orange.svg"
                          className="w-6 h-6"
                        ></img>
                        <span className="text-white">Collaboration</span>
                      </div>
                    </div>

                    <div className="flex flex-row mt-8 lg:w-10/12 items-center justify-between">
                      <div className="flex flex-row space-x-2">
                        <img
                          src="../arrow-orange.svg"
                          className="w-6 h-6"
                        ></img>
                        <span className="text-white">Quality</span>
                      </div>
                      <div className="flex flex-row space-x-2">
                        <img
                          src="../arrow-orange.svg"
                          className="w-6 h-6"
                        ></img>
                        <span className="text-white">Sustainability</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sisi kanan */}
                <div className=" flex flex-col w-full lg:w-3/5">
                  <div className="w-full flex items-center md:justify-normal px-[30px] pt-[60px] pb-[30px] md:pl-8 md:pr-12 md:py-[75px] border-b border-b-amber-600">
                    <h1
                      className={`w-[95%] md:w-full uppercase font-bold text-lg md:text-4xl font-rubik text-white ${rubik.className}`}
                    >
                      stirs <span className="text-amber-600">emotions</span> and{" "}
                      <span className="text-amber-600">embraces</span> the
                      essence of its inhabitants.
                    </h1>
                  </div>
                  <div className="w-full p-[30px] md:p-8 border-b border-b-amber-600">
                    <div
                      className={
                        (lato.className = "flex flex-col md:flex-row gap-6 w-full")
                      }
                    >
                      <div className="w-full md:w-1/2 md flex justify-start md:justify-normal">
                      <div className="w-[90%] justify-self-start md:justify-self-auto md:w-[400px] flex flex-col">
                        <span className="font-bold text-white w-full">
                          Our origin made of.
                        </span>
                        <p className="mt-2 text-[#71777b]">
                          We appoint multi-talented professionals who are
                          passionate about innovation, research, and developing
                          a projects.
                        </p>
                      </div>
                      </div>
                      <div className="w-full md:w-1/2 mt-[60px] md:mt-0 flex justify-end md:justify-normal">
                      <div className="w-[90%] text-right md:text-left md:w-[400px] flex flex-col">
                        <span className="font-bold w-full text-white text-base">
                          Sculpting the origin
                        </span>
                        <p className="mt-2 w-full text-[#71777b] text-base font-normal">
                          Our vision is constantly innovating, guided by our
                          client's dream of creating a masterpiece from a brief,
                          to discovering surprising possibilities.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[60px] md:hidden flex justify-start md:justify-normal">
                      <div className="w-[90%] justify-self-start md:justify-self-auto md:w-[400px] flex flex-col">
                        <span className="font-bold text-white w-full">
                        Progressive work that stands out for its simplicity.
                        </span>
                        <p className="mt-8 w-10/12 text-[#71777b]">
                        We really pay attention to every element that is
                          applied in a design, from material, texture, shape, to
                          function. We believe every aspect has its own
                          standard.
                        </p>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full flex flex-row">
                    <div className="w-8/12 border-r border-r-amber-600 hidden md:flex pl-8 pt-8 pb-12 justify-start">
                      <div className="flex w-10/12 flex-col font-lato">
                        <span className="font-bold w-full text-white text-base">
                          Progressive work that stands out for its simplicity.
                        </span>
                        <p className="mt-6 w-[85%] text-[#71777b] text-base">
                          We really pay attention to every element that is
                          applied in a design, from material, texture, shape, to
                          function. We believe every aspect has its own
                          standard.
                        </p>
                      </div>
                    </div>
                    <div className="w-full py-[60px] md:py-0 md:w-4/12 gap-6 flex flex-col text-center justify-center items-center">
                      <h1 className="uppercase w-5/12 md:w-3/4 text-white font-rubik font-bold">
                        Take a peek of our latest projects
                      </h1>
                      <div className="flex flex-col font-lato justify-center items-center gap-6  text-amber-600">
                        <img src="../Mouse.svg" className="w-6 h-6"></img>
                        <p>Scroll Down</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
            {/* services */}
            <div id="services" className="px-3 w-full md:px-10">
            <div className="w-[1px] h-[1000px] bg-[#DF7A20] opacity-20 absolute left-[50%] z-0"></div>
            <div className="w-full flex flex-col sticky z-10 bg-none  border-r border-l pt-[60px] px-[18px] md:px-[60px] md:pt-[150px] border-amber-600 border-opacity-20">
              <div className="flex flex-col  md:flex-row gap-[30px] md:gap-[120px] items-center w-full">
                <div className="flex flex-col w-full md:w-1/2">
                  <h1
                    className={`font-bold uppercase text-2xl md:text-4xl w-3/4 md:w-[423px] md:ml-5 ${rubik.className}`}
                  >
                    Interior & Furniture Design
                  </h1>
                  <img src="../picture-1.png" className="mt-[30px] md:mt-12"></img>
                  <p className={`w-[520px] mt-[30px] md:mt-6 ml-0 md:ml-5 ${lato.className}`}>
                    We focus on interior design in simplifying designs with
                    complex measurements on multiple layers of planes, we
                    believe every side in shape has a great opportunity beyond
                    it
                  </p>
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <h1
                    className={`font-bold uppercase text-2xl md:text-4xl w-3/4 md:w-[423px] ml-0 md:ml-5 ${rubik.className}`}
                  >
                    Mechanical and Electrical Design
                  </h1>
                  <img src="../picture-2.png" className="mt-[30px] md:mt-12"></img>
                  <p className={`w-[520px] mt-[30px] md:mt-6 ml-0 md:ml-5 ${lato.className}`}>
                    Various technologies and systems operating in design
                    Analyzing and evaluating system options in the con- are
                    integrated with the building architecture while optimizing
                    building owner investment.
                  </p>
                </div>
              </div>
            </div>
            
            </div>
            {/* portfolio */}
            <div id="portfolio" className="md:px-10">
            <div className="w-[1px] h-[1000px] bg-[#DF7A20] opacity-20 absolute left-[50%] z-0"></div>
              <div className="sticky z-10 md:px-[42px] md:pb-[60px] md:pt-[150px] md:border-r md:border-l md:border-amber-600/20 w-full">
              <Carousel/>
              </div>
            
            </div>
          
        
      

      {/* the journey */}
      <div className="w-full sticky z-10  bg-[#f8f8f8] px-[12px] md:px-10">
      <div className="w-[1px] h-[1500px] md:h-[1200px] bg-[#DF7A20] opacity-20 absolute left-[50%] z-0"></div>
        <div className="w-full sticky z-20 flex flex-col md:gap-5 md:flex-row items-center pt-[45px] md:pt-[90px] pb-[50px] md:pb-[150px] px-[18px] md:px-[3,75rem] border-r border-l border-amber-600 border-opacity-20">
          {/* sisi kiri */}
          <div className="w-full justify-center items-center md:items-baseline md:justify-normal text-center md:text-left md:w-1/2 flex flex-col">
            <h1
              className={`ml-[5px] font-bold text-2xl md:text-4xl uppercase ${rubik.className}`}
            >
              The Journey
            </h1>
            <p className={`md:ml-[5px] text-[13px] md:text-base mt-[30px] md:mt-8 opacity-50 md:w-[85%] ${lato.className}`}>
              With every project, we strive to create an environment that
              engages, sparks conversation, and fosters connection—a space where
              words may be absent, but the language of design speaks volumes.
            </p>
            <img
              src="../journey-photo.png"
              className="w-[430px] h-auto md:w-[610px] md:h-[617px] mt-[30px] md:mt-[35px]"
            ></img>
          </div>
          {/* sisi kanan */}
          <div className="w-full mt-[30px] md:mt-0 md:w-1/2 flex flex-col gap-10 items-center">
            {/* the paper */}
            <div className="flex flex-col w-full md:w-[600px]">
              <div className="flex flex-row w-full items-center md:justify-normal">
              <h1 className={`text-2xl w-full uppercase font-bold ${rubik.className}`}>
                THE PAPER
              </h1> 
              <div className={`md:hidden flex w-1/2 items-end opacity-50  ${lato.className}`}>
                  <p>Briefing</p>
                </div>
              </div>

              <div
                className={`flex flex-row opacity-50  w-full mt-6 ${lato.className}`}
              >
                <div className="hidden md:flex w-1/2">
                  <p>Briefing</p>
                </div>
                <div className="w-10/12 text-[13px] md:text-base md:w-1/2">
                  <p>
                    A complete design brief advisory is where we work with you
                    to build a detailed brief and identify your design
                    preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* Concept Creation */}
            <div className="flex flex-col w-full md:w-[600px]">
            <div className="flex flex-row w-full items-center md:justify-normal">
              <h1 className={`text-2xl uppercase w-full font-bold ${rubik.className}`}>
                Concept Creation
              </h1>
              <div className={`md:hidden flex w-1/2 items-end opacity-50  ${lato.className}`}>
                  <p>Brainstorming</p>
                </div>
            </div>

              <div
                className={`flex flex-row opacity-50  w-full mt-6 ${lato.className}`}
              >
                <div className="hidden md:flex w-1/2">
                  <p>Brainstorming</p>
                </div>
                <div className="w-10/12 text-[13px] md:text-base md:w-1/2">
                  <p>
                    We bring the best ideas and solutions beyond the
                    posibillities to the table. As we begin to investigate
                    finishes, design styles and influences.
                  </p>
                </div>
              </div>
            </div>
            {/* Round Table */}
            <div className="flex flex-col w-full md:w-[600px]">
            <div className="flex flex-row w-full items-center md:justify-normal">
            <h1 className={`text-2xl uppercase w-3/4 md:w-full font-bold ${rubik.className}`}>
                Round Table
              </h1>
              <div className={`md:hidden flex w-1/2 items-end opacity-50  ${lato.className}`}>
                  <p>Designing</p>
                </div>
            </div>
              <div
                className={`flex flex-row opacity-50  w-full mt-6 ${lato.className}`}
              >
                <div className="hidden md:flex w-1/2">
                  <p>Designing</p>
                </div>
                <div className="w-10/12 text-[13px] md:text-base md:w-1/2">
                  <p>
                    Once you decided the concept, we will continue to observe
                    the best components to suit your preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* Garage */}
            <div className="flex flex-col w-full md:w-[600px]">
            <div className="flex flex-row w-full items-center md:justify-normal">
            <h1 className={`text-2xl uppercase w-3/4 md:w-full font-bold ${rubik.className}`}>
                Garage
              </h1>
              <div className={`md:hidden flex w-1/2 items-end opacity-50  ${lato.className}`}>
                  <p>Development</p>
                </div>
            </div>
              <div
                className={`flex flex-row opacity-50  w-full mt-6 ${lato.className}`}
              >
                <div className="hidden md:flex w-1/2">
                  <p>Development</p>
                </div>
                <div className="w-10/12 text-[13px] md:text-base md:w-1/2">
                  <p>
                    Our professionals will craft the rest of design once to
                    shape those materials.
                  </p>
                </div>
              </div>
            </div>
            {/* Package */}
            <div className="flex flex-col w-full md:w-[600px]">
            <div className="flex flex-row w-full items-center md:justify-normal">
            <h1 className={`text-2xl uppercase w-3/4 md:w-full font-bold ${rubik.className}`}>
                Package
              </h1>
              <div className={`md:hidden flex w-1/2 items-end opacity-50  ${lato.className}`}>
                  <p>Delivery</p>
                </div>
            </div>
              <div
                className={`flex flex-row opacity-50  w-full mt-6 ${lato.className}`}
              >
                <div className="hidden md:flex w-1/2">
                  <p>Delivery</p>
                </div>
                <div className="w-10/12 text-[13px] md:text-base md:w-1/2">
                  <p>
                    We will deliver the nutshell of our journey along with the
                    complete guide for your developments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
