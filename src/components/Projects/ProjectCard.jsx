import { RxArrowTopRight } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }) => {

  const maindiv = useRef(null);
  const name = useRef(null);
  const desc = useRef(null);
  const button = useRef(null);
  const img = useRef(null);

  useGSAP(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maindiv.current,
          start: "top 105%",
          end: 'bottom 95%',
        }
      });
      tl.from(maindiv.current, {
        stagger: 0.1
      })
      .from([name.current, desc.current, button.current], {
        x: -500,
        opacity: 0,
        ease: "back",
        stagger: 0.1
      })
      .from(img.current, {
        x: 200,
        opacity: 0,
        scale: 0,
        ease: 'back'
      });
    }
  });

  return (
    <>
      <div ref={maindiv} className="flex max-910:flex-col-reverse max-910:gap-16 justify-between min-h-fit w-full">
        <div className="flex flex-col justify-between w-[40%] max-910:w-full gap-10 max-910:gap-10">
          <div className="text-[#e4e3e3] flex flex-col gap-3">
            <h1 ref={name} className="text-3xl max-400:text-2xl font-bold tracking-wide font-[quicksand]">
              {project?.name}
            </h1>
            <p ref={desc} className="font-[quicksand] max-910:text-justify">
              {project?.description}
            </p>
          </div>
          <div className="flex gap-10 items-center " >
            <div ref={button} className="text-sm flex items-center tracking-wide gap-3 font-semibold font-[quicksand] text-[#e4e3e3]">
            Github
            <a target="_blank" href= {project?.github} >
              <div  className="w-10 transition-all hover:scale-90 hover:bg-[#e4e3e3] hover:text-[#202020] flex items-center justify-center h-10 border rounded-full">
                <RxArrowTopRight className="text-xl" />
              </div>
            </a>
            </div>
            { project?.liveLink ? <div ref={button} className="text-sm flex items-center tracking-wide gap-3 font-semibold font-[quicksand] text-[#e4e3e3]">
            Live Demo
            <a target="_blank" href= {project?.liveLink ? project.liveLink : null } >
              <div  className="w-10 transition-all hover:scale-90 hover:bg-[#e4e3e3] hover:text-[#202020] flex items-center justify-center h-10 border rounded-full">
                <RxArrowTopRight className="text-xl" />
              </div>
            </a>
            </div> : <></> }
          </div>
        </div>
        <div ref={img} className="w-[50%] max-910:w-full flex justify-center">
         <a target="_blank" href= {project?.src} > <img className="max-740:w-[60vw] max-590:w-full rounded-lg w-[35vw]" src={project?.src} alt="" /> </a>
        </div>
      </div>
      <hr className="border-[#808080]" />
    </>
  );
};

export default ProjectCard;
