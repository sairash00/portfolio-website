import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


const App = () => {



  return (
  
      <div className="bg-[#e4e3e3] overflow-x-hidden min-h-screen">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
  
  )
}

export default App
