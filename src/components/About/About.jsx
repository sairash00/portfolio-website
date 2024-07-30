import { FaLinkedin , FaGithub, FaTelegram, FaInstagram } from "react-icons/fa6";

const About = () => {

  return (
    <div id="about" className="w-screen text-[#202020] max-400:gap-8 max-400:px-[1rem] max-590:px-[2rem] flex flex-col gap-12 h-fit bg-[#e4e3e3] px-[4rem] py-[3rem] " >
        <div>
            <h1 className=" text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4  " >About Me</h1>        
            <p className="mt-[1rem]  max-320:tracking-tight text-justify font-[quicksand]  text-lg tracking-wider font-[500] " >My name is <b className="font-bold" >Sairash Khatiwada</b>  and I am a full-stack developer skilled in creating user friendly and functional websites using different languages, frameworks and different modern tools. I am highly cooperative and dedicated to delivering high-quality work quickly. I focus on developing minimal and smooth interfaces to make the user experience much better. My passion for innovation and attention to detail ensures that I provide the best possible solutions for every project, making me a reliable and efficient partner in development.</p>
        </div>
        <div>
            <h1 className=" text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4  " >Skills and Technologies i use</h1>        
            <p className="mt-[1rem] max-320:tracking-tight text-justify text-lg font-[quicksand] tracking-wider font-[500] " >I am proficient in various tools and technologies, including <b> HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, </b> and <b> MongoDB </b>. I utilize <b> Git </b> and <b> GitHub </b> for version control and have a knack for styling and animations with <b> Tailwind CSS </b> and <b> Framer Motion </b>. I can effectively manage media with <b> Cloudinary </b> and <b> integrate diverse APIs </b> to enhance functionality. Crafting different types of RESTful APIs to support various features and functionalities is a core strength of mine. <b> Committed to continuous learning </b> , I stay updated with the latest trends and technologies to ensure I deliver innovative and efficient solutions.</p>
        </div>
        <div className="flex flex-col gap-[1rem] " >
            <h1 className=" text-sm font-semibold font-[quicksand] tracking-wide underline underline-offset-4  " >Connect with Me At</h1>        
            <div className="flex gap-2 " >
                 <a href="https://linkedin.com/in/sairash-Khatiwada" target="_blank"> <FaLinkedin className=" text-[#0077B5] text-2xl " /> </a>
                 <a href="https://github.com/sairash00" target="_blank" > <FaGithub className=" text-[#202020] text-2xl " /> </a>
                 <a href="https://t.me/sairash_00" target="_blank" > <FaTelegram className=" text-[#29A5E6] text-2xl " /> </a>
                 <a href="https://instagram.com/sairash_khatiwada" target="_blank" > <FaInstagram className=" text-[#202020] text-2xl " /> </a>
            </div> 
        </div>
    </div>

  )
}

export default About