import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center font-[quicksand] pt-[2rem] max-590:pt-[1.5rem] max-400:pt-[1rem] ">
      <motion.div

        initial ={{y:-20, opacity:0}}
        animate={{ y:0,opacity:1}}
        transition={{ ease: "easeOut", duration: 0.3 }}

        className="text-[#e4e3e3] font-bold  text-2xl max-740:text-xl max-400:text-lg max-320:text-[1rem] tracking-wide "
      >
        SAIRASH <br /> PORTFOLIO{" "}
      </motion.div>
      <div className="text-[#e4e3e3] flex gap-10 max-740:gap-6 max-590:gap-3  ">
        <a
          className="text-sm  max-590:text-[0.8rem] hover:text-gray-400 transition-all "
          href="#about"
        >
          About Me
        </a>
        <a
          className="text-sm  max-590:text-[0.8rem] hover:text-gray-400 transition-all "
          href="#projects"
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
