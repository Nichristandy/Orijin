import Carousel from "@/components/Carousel";
import EmailInput from "@/components/EmailInput";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
    <div className="w-full h-screen overflow-x-hidden">
      <div className="w-[1px] h-full bg-[#DF7A20] opacity-20 mx-auto left-[50%] absolute -z-10"></div>
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
      {/* Services */}
      <div className="w-full px-3 md:px-5 lg:px-10 ">
      <div className="w-full  h-full border-r border-l border-primary border-opacity-20 py-[60px] px-[18px] md:px-[30px] md:py-[75px] lg:py-[150px] lg:px-[60px]">
        <div className="flex flex-col gap-[30px] md:flex-row md:items-start md:gap-16 lg:gap-[120px]">
            <div className="flex flex-col w-full gap-[30px] md:w-1/2 md:gap-6 lg:gap-12">
                <h1 className={`font-bold text-secondary text-2xl  w-full uppercase md:pl-5 lg:w-3/4 lg:text-4xl ${rubik.className}`}>Interior & Furniture Design</h1>
                <div className="flex flex-col gap-[30px] md:gap-6">
                    <img src="../picture-1.png" className="h-auto lg:w-auto"/>
                    <span className={`text-black opacity-50 lg:pl-5 ${lato.className}`}>We focus on interior design in simplifying designs with complex measurements on multiple layers of planes, we believe every side in shape has a great opportunity beyond it</span>
                </div>
            </div>
            <div className="flex flex-col w-full gap-[30px] md:w-1/2 md:gap-6 lg:gap-12">
                <h1 className={`font-bold text-secondary  text-2xl w-full uppercase md:pl-5 lg:w-3/4  lg:text-4xl ${rubik.className}`}>Mechanical and Electrical Design</h1>
                <div className="flex flex-col gap-[30px] md:gap-6">
                    <img src="../picture-2.png" className="h-auto lg:w-auto"/>
                    <span className={`text-black opacity-50 md:pl-5 ${lato.className}`}>Various technologies and systems operating in design Analyzing and evaluating system options in the con- are integrated with the building architecture while optimizing building owner investment.</span>
                </div>
            </div>
            
        </div>
      </div>
      </div>
      {/* Portfolio */}
      <div className="w-full md:px-5  lg:px-10">
        <div className="border-r border-l border-opacity-20 border-primary md:pb-[30px] lg:pb-[60px] md:px-6 lg:px-[42px]">
          <Carousel/>
        </div>
      </div>
      {/* The journey */}
      <div className="w-full bg-[#f8f8f8] px-3 md:px-5 lg:px-10 ">
          <div className="border-r border-l w-full border-primary border-opacity-20 px-[18px]  pb-[75px] pt-[45px] lg:pt-[90px] lg:pb-[150px] lg:px-[60px]">
            <div className="w-full flex flex-col gap-[30px]  md:flex-row md:gap-[60px] lg:gap-[120px]">
              {/* sisi kiri */}
              <div className="w-full md:w-1/2 flex flex-col gap-[30px] items-center md:items-start text-center md:text-left   md:gap-4 lg:gap-8">
                <h1 className={`text-secondary font-bold uppercase text-2xl lg:text-4xl ${rubik.className}`}>The Journey</h1>
                <div className={`flex flex-col text-black gap-[30px] lg:gap-[35px] ${lato.className}`}>
                  <span className="opacity-50 text-center w-full text-xs md:text-base md:text-left md:w-[90%]">With every project, we strive to create an environment that engages, sparks conversation, and fosters connection—a space where words may be absent, but the language of design speaks volumes.</span>
                  <img src="../journey-photo.png" className="w-auto h-auto"></img>
                </div>
              </div>
              {/* sisi kanan */}
              <div className="w-full md:w-1/2 flex flex-col gap-10">
                {/* The paper */}
                <div className="flex flex-col gap-[26px]">
                  <div className="w-full flex flex-row justify-between md:gap-0">
                    <h1 className={`font-bold text-secondary uppercase  text-lg md:w-full lg:text-2xl ${rubik.className}`}>The paper</h1>
                    <span className={`text-black opacity-50 flex text-right lg:hidden ${lato.className}`}>Briefing</span>
                  </div> 
                  <div className={` flex flex-row text-black items-start opacity-50 w-full text-left text-xs md:text-base md:gap-3 ${lato.className}`}>
                    <span className="w-1/2 hidden lg:flex">Briefing</span>
                    <span className="w-full lg:w-1/2">A complete design brief advisory is where we work with you to build a detailed brief and identify your design preferences.</span>
                  </div>
                </div>
                {/* Concept Creation   */}
                <div className="flex flex-col gap-[26px]">
                  <div className="w-full flex flex-row justify-between md:gap-0">
                    <h1 className={`font-bold text-secondary uppercase  text-lg md:w-full lg:text-2xl ${rubik.className}`}>Concept Creation</h1>
                    <span className={`text-black opacity-50 flex text-right lg:hidden ${lato.className}`}>Brainstorming</span>
                  </div> 
                  <div className={` flex flex-row text-black items-start opacity-50 w-full text-left text-xs md:text-base md:gap-3 ${lato.className}`}>
                    <span className="w-1/2 hidden lg:flex">Brainstorming</span>
                    <span className="w-full lg:w-1/2">We bring the best ideas and solutions beyond the posibillities to the table. As we begin to investigate finishes, design styles and influences.</span>
                  </div>
                </div>
                {/* Round table */}
                <div className="flex flex-col gap-[26px]">
                  <div className="w-full flex flex-row justify-between md:gap-0">
                    <h1 className={`font-bold text-secondary uppercase  text-lg md:w-full lg:text-2xl ${rubik.className}`}>Round table</h1>
                    <span className={`text-black opacity-50 flex text-right lg:hidden ${lato.className}`}>Designing</span>
                  </div> 
                  <div className={` flex flex-row text-black items-start opacity-50 w-full text-left text-xs md:text-base md:gap-3 ${lato.className}`}>
                    <span className="w-1/2 hidden lg:flex">Designing</span>
                    <span className="w-full lg:w-1/2">Once you decided the concept, we will continue to observe the best components to suit your preferences.</span>
                  </div>
                </div>
                {/* Garage */}
                <div className="flex flex-col gap-[26px]">
                  <div className="w-full flex flex-row justify-between md:gap-0">
                    <h1 className={`font-bold text-secondary uppercase  text-lg md:w-full lg:text-2xl ${rubik.className}`}>Garage</h1>
                    <span className={`text-black opacity-50 flex text-right lg:hidden ${lato.className}`}>Development</span>
                  </div> 
                  <div className={` flex flex-row text-black items-start opacity-50 w-full text-left text-xs md:text-base md:gap-3 ${lato.className}`}>
                    <span className="w-1/2 hidden lg:flex">Development</span>
                    <span className="w-full lg:w-1/2">Our professionals will craft the rest of design once to shape those materials.</span>
                  </div>
                </div>
                {/* Package */}
                <div className="flex flex-col gap-[26px]">
                  <div className="w-full flex flex-row justify-between md:gap-0">
                    <h1 className={`font-bold text-secondary uppercase  text-lg md:w-full lg:text-2xl ${rubik.className}`}>package</h1>
                    <span className={`text-black opacity-50 flex text-right lg:hidden ${lato.className}`}>Delivery</span>
                  </div> 
                  <div className={` flex flex-row items-start text-black opacity-50 w-full text-left text-xs md:text-base md:gap-3 ${lato.className}`}>
                    <span className="w-1/2 hidden lg:flex">Delivery</span>
                    <span className="w-full lg:w-1/2">We will deliver the nutshell of our journey along with the complete guide for your developments</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
      </div>
      {/* footer */}
      <Footer/> 
    </div>
  );
}
