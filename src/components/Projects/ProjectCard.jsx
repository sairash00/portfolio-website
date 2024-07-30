import { RxArrowTopRight } from "react-icons/rx";

const ProjectCard = ({project}) => {
  return (
    <>
    <div className=" flex max-800:flex-col-reverse max-800:gap-16 justify-between min-h-fit w-full" >
        <div className=" flex flex-col justify-between w-[40%] max-800:w-full gap-10 max-800:gap-10  " >
            <div className="text-[#e4e3e3] flex  flex-col gap-3 " >
                <h1 className=" text-3xl font-bold tracking-wide  font-[quicksand] " >{project?.name} </h1>
                <p className=" font-[quicksand] max-800:text-justify " > {project?.description} </p>
            </div>
            <div className="text-sm flex items-center tracking-wide gap-3 font-semibold font-[quicksand] text-[#e4e3e3] " >Project Details <div className="w-10 flex items-center justify-center h-10 border rounded-full" > <RxArrowTopRight className="text-xl" /> </div> </div>
        </div>
        <div className="w-[50%] max-800:w-full flex justify-center " >
            <img className=" max-740:w-[50vw] w-[35vw] " src={project?.src} alt="" />
        </div>
    </div>
    <hr className="border-[#808080]" />
    </>
  )
}

export default ProjectCard