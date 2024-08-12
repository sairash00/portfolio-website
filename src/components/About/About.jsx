import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiExpress, SiMongodb, SiTailwindcss, SiCloudinary } from "react-icons/si";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainbody = useRef(null);
  const abouthead = useRef(null);
  const skillhead = useRef(null);
  const linkhead = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const links = useRef(null);
  const icons = useRef(null)

  useGSAP(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainbody.current,
          start: "top 90%",
          scrub: 1,
          end: "bottom 90%",
        }
      });

      tl.from(mainbody.current, {
        stagger: 0.3
      })
      .from([about.current,icons.current, skill.current, links.current], {
        x: -50,
        opacity: 0,
        ease: "back",
        duration: 0.4,
        stagger: 0.2,
        scrub: 1
      });
    }
  }, []);

  return (
    <div ref={mainbody} id="about" className="w-screen overflow-x-hidden text-[#202020] max-400:gap-8 max-400:px-[1rem] max-590:px-[2rem] flex flex-col gap-12 h-fit bg-[#e4e3e3] px-[4rem] py-[3rem]">
      <div>
        <h1 ref={abouthead} className="text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4">About Me</h1>
        <p ref={about} className="mt-[1rem] max-320:tracking-tight text-justify font-[quicksand] text-lg tracking-wider font-[500]">
          My name is <b className="font-bold">Sairash Khatiwada</b> and I am a full-stack developer skilled in creating user-friendly and functional websites using different languages, frameworks, and modern tools. I am highly cooperative and dedicated to delivering high-quality work quickly. I focus on developing minimal and smooth interfaces to enhance the user experience. My passion for innovation and attention to detail ensures that I provide the best possible solutions for every project, making me a reliable and efficient partner in development.
        </p>
      </div>
      <div>
        <h1 ref={skillhead} className="text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4">Skills and Technologies I Use</h1>
        <div ref={icons} className="flex justify-between gap-4 max-400:gap-2 max-590:mt-[0.5rem] mt-[1.5rem] text-4xl">
          <FaHtml5 className="text-[#E34F26]  hover:scale-[1.2] transition-all " />
          <FaCss3Alt className="text-[#1572B6]  hover:scale-[1.2] transition-all  " />
          <SiJavascript className="text-[#ddc405] hover:scale-[1.2] transition-all " />
          <SiTypescript className="text-[#3178C6] hover:scale-[1.2] transition-all " />
          <FaReact className="text-[#61DAFB]   hover:scale-[1.2] transition-all " />
          <FaNodeJs className="text-[#339933]   hover:scale-[1.2] transition-all " />
          <SiExpress className="text-[#000000]   hover:scale-[1.2] transition-all " />
          <SiMongodb className="text-[#47A248]   hover:scale-[1.2] transition-all " />
          <FaGitAlt className="text-[#F05032]   hover:scale-[1.2] transition-all " />
          <FaGithub className="text-[#181717]   hover:scale-[1.2] transition-all " />
          <SiTailwindcss className="text-[#06B6D4]   hover:scale-[1.2] transition-all " />
          {/* <SiGsap className="text-[#88CE02]" /> */}
          <SiCloudinary className="text-[#232F3E]   hover:scale-[1.2] transition-all " />
        </div>
        <p ref={skill} className="mt-[1.5rem] max-590:mt-[0.5rem] max-320:tracking-tight text-justify text-lg font-[quicksand] tracking-wider font-[500]">
          I am proficient in various tools and technologies, including <b className="" >HTML, CSS, JavaScript, TypeScript, React, Node.js, Express,</b> and <b className="" >MongoDB</b>. I utilize <b className="" >Git</b> and <b className="" >GitHub</b> for version control and have a knack for styling and animations with <b className="" >Tailwind CSS</b> and <b className="" >GSAP</b>. I can effectively manage media with <b className="" >Cloudinary</b> and <b className="" >integrate diverse APIs</b> to enhance functionality. Crafting different types of RESTful APIs to support various features and functionalities is a core strength of mine. <b className="" >Committed to continuous learning</b>, I stay updated with the latest trends and technologies to ensure I deliver innovative and efficient solutions.
        </p>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h1 ref={linkhead} className="text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4">Connect with Me At</h1>
        <div ref={links} className="flex gap-2">
          <a href="https://linkedin.com/in/sairash-Khatiwada" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0077B5] text-2xl" />
          </a>
          <a href="https://github.com/sairash00" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#202020] text-2xl" />
          </a>
          <a href="https://t.me/sairash_00" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="text-[#29A5E6] text-2xl" />
          </a>
          <a href="https://instagram.com/sairash_khatiwada" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#202020] text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
