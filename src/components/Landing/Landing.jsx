import Navbar from "./Navbar.jsx"
import Middle from "./Middle.jsx"
import Bottom from "./Bottom.jsx"
// import { useRef } from "react"



const Landing = () => {

  return (
    <div  className='flex flex-col justify-between w-[100vw] max-590:bg-cover bg-bottom bg-[#202020] bg-contain bg-no-repeat bg-[url("/portfolioCharacterSmall.jpg")] h-[100vh] ' >
      <div id="home" className="flex flex-col justify-between h-[85%] max-590:px-[2rem] max-400:px-[1rem] px-[4rem] " >
        <Navbar />
        <Middle />
      </div>
      <Bottom />
    </div>
  )
}


export default Landing