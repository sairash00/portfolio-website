import ProjectCard from "./ProjectCard";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const mainContainer = useRef(null);
    const topBigText = useRef(null);
    const topPara = useRef(null);
    const bottomPara = useRef(null);

    useGSAP(() => {
        const mq = window.matchMedia("(min-width: 800px)");

        if (mq.matches) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainContainer.current,
                    start: "top 100%",
                    scrub: 1,
                    end: "bottom 80%",
                }
            });
            tl.from(mainContainer.current, {
                stagger: 0.1
            })
            .from([topBigText.current], {
                opacity: 0,
                x: -400,
                duration: 0.6,
                ease: "back",
                stagger: 0.1
            })
            .from([topPara.current], {
                opacity: 0,
                x: 400,
                duration: 0.6,
                ease: "back",
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: bottomPara.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 1,
                }
            });
            tl2.from(bottomPara.current, {
                opacity: 0,
                y: -100,
                ease: "back",
                duration: 0.1
            });
        }
    }, []);

    const projects = [
        {
            name: "Blogging Website",
            description: "A dynamic and user-friendly blogging platform built with React and Node.js. This project features user authentication, CRUD operations for posts and other functionality, and seamless integration with Cloudinary for image uploads. It showcases my skills in full-stack development and creating scalable web applications.",
            src: "/Blogging.jpg",
            uin: "blog",
            liveLink: null,
            github: "https://github.com/sairash00/Blogging-website"
        },
        {
            name: "Ecommerce Website",
            description: "A comprehensive e-commerce platform developed using React and Node.js. This project includes features such as user authentication, product listings, shopping cart functionality and order management. It highlights my ability to create secure, efficient, and user-centric web applications.",
            src: "/ecommerce.jpg",
            uin: "ecommerce",
            liveLink: "https://ecommerce-frontend-sigma-nine.vercel.app" ,
            github: "https://github.com/sairash00/"
        },
        {
            name: "Restaurant Food Delivery App",
            description: "The Food Delivery & Restaurant Management App, built on the MERN stack, leverages TypeScript and React to deliver a robust and scalable solution for restaurant management and food delivery. Tailwind CSS and Daisy UI provide a sleek, responsive design, while Cloudinary handles image optimization. The app features a comprehensive admin panel, secure authentication, and seamless order management. Deployed on Vercel, it ensures high performance and reliability, making it an ideal choice for modern restaurant operations.",
            src: "/foodApp.png",
            liveLink: "https://food-delivery-app-frontend-teal.vercel.app" ,
            uin: "food",
            github: "https://github.com/sairash00/foodDeliveryApp"
        },
        // {
        //     name: "Weather Application",
        //     description: "A sleek and user-friendly weather application built with React. This app fetches real-time weather data from a third-party API, allowing users to search for and view current weather conditions and forecasts for different locations. It showcases my ability to integrate APIs and create responsive, interactive user interfaces.",
        //     src: "/weather.jpg",
        //     uin: "weather",
        //     github: "https://github.com/sairash00/weather-app"
        // }
    ];

    return (
        <div id="projects" className="w-screen min-h-screen max-400:px-[1rem] px-[4rem] max-590:px-[2rem] max-740:px-[3rem] py-[4rem] bg-[#202020] text-[#e4e3e3]">
            <div ref={mainContainer} className="flex gap-4 justify-between">
                <h1 id="big" ref={topBigText} className="max-740:text-xl text-2xl font-[quicksand] font-semibold">
                    SOME OF THE PROJECTS <br />
                    I HAVE WORKED ON
                </h1>
                <p ref={topPara} className="w-[50%] max-590:hidden max-740:leading-4 max-740:text-[0.65rem] max-800:text-[0.7rem] text-sm max-910:text-[0.8rem] font-light font-[quicksand]">
                    Explore a selection of my recent work, highlighting my development skills. These projects demonstrate my expertise in building robust, efficient, and scalable applications.
                </p>
            </div>
            <hr className="mt-8 border-[#808080]" />
            <div className="flex flex-col mt-20 max-910:mt-16 max-910:gap-16 gap-20">
                {
                    projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))
                }
                <p ref={bottomPara} className="font-[quicksand] tracking-wide text-justify font-light text-sm">
                    Working on these projects has been a fantastic journey of growth and learning. Each project came with its own set of challenges, pushing me to think creatively and improve my technical skills. From building full-stack applications to integrating APIs and handling user authentication, I've learned a lot and enjoyed every moment of it. These experiences have not only made me a better developer but also fueled my passion for web development. I'm excited to keep learning, tackling new challenges, and building even more amazing applications in the future.
                </p>
            </div>
        </div>
    );
};

export default Projects;
