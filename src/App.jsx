import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


const App = () => {

  // const handleMouseEnter = () => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.display = 'block'
  //   }
  // }

  // const handleMouseLeave = () => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.display = 'none'
  //   }
  // }

  // const handleMouseMove = (e) => {
  //   const x = e.clientX
  //   const y = e.clientY

  //   if (cursorRef.current) {
  //     cursorRef.current.style.bottom = `${y}px`
  //     cursorRef.current.style.left = `${x}px`
  //   }
  // }

  return (
  
      <div className="bg-[#e4e3e3] min-h-screen">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
  
  )
}

export default App
