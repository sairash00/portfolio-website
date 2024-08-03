import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa6";
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

  useGSAP(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainbody.current,
          start: "top 100%",
          scrub: 1,
          end: "bottom 90%",
        }
      });

      tl.from(mainbody.current, {
        stagger: 0.3
      })
      .from([about.current, skill.current, links.current], {
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
        <p ref={skill} className="mt-[1rem] max-320:tracking-tight text-justify text-lg font-[quicksand] tracking-wider font-[500]">
          I am proficient in various tools and technologies, including <b>HTML, CSS, JavaScript, TypeScript, React, Node.js, Express,</b> and <b>MongoDB</b>. I utilize <b>Git</b> and <b>GitHub</b> for version control and have a knack for styling and animations with <b>Tailwind CSS</b> and <b>Framer Motion</b>. I can effectively manage media with <b>Cloudinary</b> and <b>integrate diverse APIs</b> to enhance functionality. Crafting different types of RESTful APIs to support various features and functionalities is a core strength of mine. <b>Committed to continuous learning</b>, I stay updated with the latest trends and technologies to ensure I deliver innovative and efficient solutions.
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
