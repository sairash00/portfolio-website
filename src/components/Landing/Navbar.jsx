import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Navbar = () => {
  const logo = useRef(null);
  const links = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from([logo.current, links.current], {
      y: 100,
      opacity: 0,
      scale: 0,
      ease: "back",
      duration: 0.6,
      stagger: 0.2,
      delay: 0.5,
    });
  });

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center font-[quicksand] pt-[2rem] max-590:pt-[1.5rem] max-400:pt-[1rem]">
      <div ref={logo} className="text-[#e4e3e3] font-bold text-2xl max-740:text-xl max-400:text-[1.2rem] max-320:text-[1rem] tracking-wide">
        SAIRASH <br /> PORTFOLIO
      </div>
      <div ref={links} className="text-[#e4e3e3] flex gap-10 max-740:gap-6 max-590:gap-3">
        <button
          className="text-sm max-590:text-[0.8rem] max-590:font-bold hover:text-gray-400 transition-all"
          onClick={() => handleScroll("contact")}
        >
          Contact Me
        </button>
        <button
          className="text-sm max-590:text-[0.8rem] max-590:font-bold hover:text-gray-400 transition-all"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
