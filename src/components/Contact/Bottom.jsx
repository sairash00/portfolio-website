import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Bottom = () => {
  const texts = useRef(null);
  const smallText = useRef(null);
  const maindiv = useRef(null);

  useGSAP(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maindiv.current,
          start: "top 80%",
          scrub: 1,
          end: "bottom 90%",
        }
      });

      tl.from(texts.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'back',
        stagger: 0.5
      })
      .from(smallText.current, {
        y: 20,
        opacity: 0,
        ease: 'back',
        duration: 0.6
      });
    }
  });

  return (
    <div ref={maindiv} className="w-full h-[40vh] pl-3 flex items-center justify-center bg-[#202020]">
      <div className="text-[#e4e3e3] flex flex-col gap-2 justify-center items-center max-640:items-start max-400:items-center h-full">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMnZtzvbwbKclpnDgGtwxcwdZxlSJJKRXWfcSgQlMZSJhpbbfVMlnqtPRJlcNTxwphwmkxv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href="#home"><div ref={texts} className="max-320:text-2xl max-400:text-[2rem] max-400:tracking-[1rem] flex text-[6rem] max-590:text-[2.5rem] max-590:tracking-[1.5rem] max-640:text-[3rem] max-740:text-[3.5rem] max-740:tracking-[2.5rem] max-910:text-[4rem] w-fit font-rocknroll tracking-[3rem]">
            SAIRASH
          </div></a>
        </a>
        <div ref={smallText} className="max-320:text-center max-320:text-[0.6rem] max-400:tracking-tight max-400:text-[0.7rem] max-590:text-sm max-590:tracking-normal text-normal font-[quicksand] tracking-wide">
          A developer from Nepal passionate about development.
        </div>
      </div>
    </div>
  );
};

export default Bottom;
