import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Top = () => {
  const title = useRef(null);
  const heading = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const social = useRef(null);
  const maindiv = useRef(null);

  useGSAP(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maindiv.current,
          start: "top 65%",
          end: "bottom 50%",
        }
      });

      tl.from(maindiv.current, {
        stagger: 0.2
      })
      .from([title.current, heading.current], {
        x: 700,
        opacity: 0,
        stagger: 0.3,
        ease: "back"
      })
      .from([email.current, phone.current, social.current], {
        y: 50,
        opacity: 0,
        ease: "back",
        scale: 0,
        stagger: 0.1
      });
    }
  });

  return (
    <div ref={maindiv} className="flex flex-col px-[4rem] max-400:px-[1rem] max-590:px-[2rem] max-740:px-[3rem] py-[3rem] gap-10 text-[#202020]">
      <div className="flex flex-col gap-5">
        <div ref={title} className="font-[quicksand] text-[#202020] font-[500] max-590:text-sm max-400:text-[0.7rem] underline underline-offset-4">That's all for now</div>
        <h1 ref={heading} className="text-3xl max-400:text-xl max-400:font-bold max-590:text-[1.7rem] max tracking-wider leading-relaxed max-800:leading-tight font-semibold font-[quicksand]">
          Got a project in mind? <br />
          Let’s talk.
        </h1>
      </div>
      <hr className="border-[#808080] mt-2" />
      <div className="flex justify-between max-590:flex-col gap-y-5">
        <div ref={email} className="flex flex-col">
          <h3 className="text-sm font-[500] font-[quicksand] tracking-tight">E-mail Address:</h3>
          <a className="font-[quicksand] font-bold tracking-wide" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMnZtzvbwbKclpnDgGtwxcwdZxlSJJKRXWfcSgQlMZSJhpbbfVMlnqtPRJlcNTxwphwmkxv" target="_blank" rel="noopener noreferrer">Sairash7248@gmail.com</a>
        </div>
        <div ref={phone} className="flex flex-col">
          <h3 className="text-sm font-[500] font-[quicksand] tracking-tight">Phone Number</h3>
          <a className="font-[quicksand] font-bold tracking-wide" href="tel:+9779825920250" target="_blank" rel="noopener noreferrer"> (+977) 9825920250 </a>
        </div>
        <div ref={social} className="flex flex-col">
          <h3 className="text-sm font-[500] font-[quicksand] tracking-tight">Social:</h3>
          <div className="flex gap-2">
            <a href="https://linkedin.com/in/sairash-khatiwada" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-[#0077B5]" />
            </a>
            <a href="https://github.com/sairash00" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl  text-[#000]" />
            </a>
            <a href="https://instagram.com/sairash_khatiwada" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
