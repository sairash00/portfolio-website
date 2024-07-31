import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Middle = () => {

  const BigText = useRef(null);
  const button = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(BigText.current,{
      x: -500,
      opacity: 0,
      delay:1.2,
      scale:0,
      duration: 0.8,
      ease: "back",
      stagger: 0.3
    })
    
    .from(email.current,{
      x:-100,
      opacity:0,
      scale:0,
      duration:0.5,
      ease: "back",
      stagger:0.3
    })

    .from(phone.current,{
      x:-100,
      opacity: 0,
      scale:0,
      duration: 0.5,
      ease: "back",
      stagger: 0.3
    })
      
   

  })

  return (
    <div className=" w-full flex bg-[#2020200a] items-end justify-between ">
      <div className=" flex flex-col gap-4 ">
        <h1 ref={BigText} className="text-6xl max-590:text-5xl text-[#e4e3e3] max-320:text-4xl font-[ubuntu] font-[900] ">
          FULL-STACK <br />
          WEBSITE DEVELOPER
        </h1>
        <button ref={button} className=" max-740:hidden w-fit font-[400] hover:text-[#202020] hover:bg-[#e4e3e3] transition-all px-5 rounded py-1 text-[#e4e3e3] text-sm border  border-[#aeaaaa] ">
          Resume
        </button>
      </div>
      <div  className="text-[#e4e3e3] max-740:hidden font-semibold  text-sm font-[quicksand]  ">
        <div ref={email}> 
          Sairash7248@gmail.com
        </div>
        <div ref={phone} > (+977) 9825920250 </div>
      </div>
    </div>
  );
};

export default Middle;
