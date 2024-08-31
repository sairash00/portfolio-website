import './Bottom.css'
import Marquee from 'react-fast-marquee'

const Bottom = () => {
  return (
        <Marquee autoFill ={true} pauseOnHover={true} direction ="left" speed={100}  className=" py-1 w-full bg-[#ffffff20] text-sm text-[#e4e3e3e2] text-center tracking-wider font-[quicksand] " >
             <pre>HTML  ●  CSS ●  JAVASCRIPT  ●  REACT  ●  EXPRESS  ●  MONGODB  ●  NODE.JS  ●  TAILWIND   ●  TYPESCRIPT  ●  GIT  ●  GITHUB  ●  CLOUDINARY  ●  GSAP  ●  </pre> 
        </Marquee>
    
  )
}

export default Bottom