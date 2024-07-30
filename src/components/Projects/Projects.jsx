import ProjectCard from "./ProjectCard"

const Projects = () => {

    const projects = [
        {
            name: "Blogging Website",
            description: "A dynamic and user-friendly blogging platform built with React and Node.js. This project features user authentication, CRUD operations for posts and other functionality, and seamless integration with Cloudinary for image uploads. It showcases my skills in full-stack development and creating scalable web applications.",
            src: "/portfolioCharacterSmall2.jpg",
            uin:"blog"
        },
        {
            name: "Ecommerce Website",
            description: "A comprehensive e-commerce platform developed using React and Node.js. This project includes features such as user authentication, product listings, shopping cart functionality and order management. It highlights my ability to create secure, efficient, and user-centric web applications.",
            src:"/portfolioCharacterSmall2.jpg",
            uin: "ecommerce"
        },
        {
            name:"Expense Tracking App",
            description: "A responsive and intuitive expense tracking application built with React and Node.js. This app features user authentication, allowing users to securely log in and manage their finances. Users can perform CRUD operations on income and expenses, calculate total expenses and income, and determine their savings. It demonstrates my proficiency in developing functional and user-friendly web applications.",
            src: "/portfolioCharacterSmall2.jpg",
            uin: "expense"
        },
        {
            name:"Weather Application",
            description: "A sleek and user-friendly weather application built with React. This app fetches real-time weather data from a third-party API, allowing users to search for and view current weather conditions and forecasts for different locations. It showcases my ability to integrate APIs and create responsive, interactive user interfaces.",
            src: "/portfolioCharacterSmall2.jpg",
            uin: "weather"
        }
    ]

  return (
    <div id="projects" className=" w-screen min-h-screen max-400:px-[1rem] px-[4rem] max-590:px-[2rem] max-740:px-[3rem] py-[4rem] bg-[#202020] text-[#e4e3e3] " >
        <div className="flex gap-4 justify-between " >
            <h1 className=" max-740:text-xl  text-2xl font-[quicksand] font-semibold " >SOME OF THE PROJECTS <br />
            I HAVE WORKED ON</h1>
            <p className="w-[50%] max-590:hidden max-740:leading-4 max-740:text-[0.65rem] max-800:text-[0.7rem] text-sm max-910:text-[0.8rem]  font-light font-[quicksand] " >Explore a selection of my recent work, highlighting my development skills. These projects demonstrate my expertise in building robust, efficient, and scalable applications.</p>
        </div>
        <hr className=" mt-8 border-[#808080] " />
        <div  className="flex flex-col mt-20 max-910:mt-16 max-910:gap-16 gap-20" >
        {
            projects.map((project, id) => (
                <ProjectCard key = {id} project = {project} />
             ) )
        }
        <p className=" font-[quicksand] tracking-wide text-justify font-light text-sm " >Working on these projects has been a fantastic journey of growth and learning. Each project came with its own set of challenges, pushing me to think creatively and improve my technical skills. From building full-stack applications to integrating APIs and handling user authentication, I've learned a lot and enjoyed every moment of it. These experiences have not only made me a better developer but also fueled my passion for web development. I'm excited to keep learning, tackling new challenges, and building even more amazing applications in the future.</p>
        </div>
    </div>
  )
}

export default Projects