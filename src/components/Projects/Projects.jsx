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
            name: "Gossip, Chat Application",
            description: "This project is a real-time chat application built on the MERN stack with TypeScript and React, providing a seamless messaging experience. It utilizes TanStack Query for efficient data fetching, Socket.IO for real-time communication, and Tailwind CSS for responsive design. Users can chat with anyone on the platform, with features like OTP-based email authentication, secure chat saving, and deletion options. Images are managed through Cloudinary for optimized storage and retrieval. The application ensures real-time message updates, creating a dynamic and interactive chat environment.",
            src: "/gossip.png",
            liveLink: "https://gossip-nine.vercel.app/login" ,
            uin: "food",
            github: "https://github.com/sairash00/Chat-Application"
        },
          {
            name: "Auction Marketplace",
            description: "This project is a full-stack Auction Marketplace built with the MERN stack, featuring secure user authentication, product listings, and a dynamic bidding system. Users can sell products at fixed prices or create timed auctions where buyers compete through real-time bidding. The platform automatically handles auction expiration and winner determination based on the highest bid. Through this project, I gained hands-on experience with JWT authentication, MongoDB data modeling, RESTful API development, auction logic implementation, protected routes, and backend scheduling for automatic auction closure. The project strengthened my understanding of scalable backend architecture, state management, and building marketplace-based applications with real-world business logic.",
            src: "/image.png",
            // liveLink: "https://gossip-nine.vercel.app/login" ,
            uin: "auction",
            github: "https://github.com/sairash00/AuctionMarketplace"
        },
        {
            name: "Blogging Website",
            description: "A dynamic and user-friendly blogging platform built with React and Node.js. This project features user authentication, CRUD operations for posts and other functionality, and seamless integration with Cloudinary for image uploads. It showcases my skills in full-stack development and creating scalable web applications.",
            src: "/Blogging.jpg",
            uin: "blog",
            liveLink: "https://blogging-website-frontend-swart.vercel.app/feeds/all",
            github: "https://github.com/sairash00/Blogging-website"
        },
         {
            name: "Food Delivery App",
            description: "The Food Delivery & Restaurant Management App, built on the MERN stack, leverages TypeScript and React to deliver a robust and scalable solution for restaurant management and food delivery. Tailwind CSS and Daisy UI provide a sleek, responsive design, while Cloudinary handles image optimization. The app features a comprehensive admin panel, secure authentication, and seamless order management. Deployed on Vercel, it ensures high performance and reliability, making it an ideal choice for modern restaurant operations.",
            src: "/foodApp.png",
            liveLink: "https://food-delivery-app-frontend-teal.vercel.app" ,
            uin: "food",
            github: "https://github.com/sairash00/foodDeliveryApp"
        }
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
