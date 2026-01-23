import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Education, Skills, Projects, 
  StarsCanvas, Navbar, Hero, Certification} from './components'

const App = () => {

  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>

        <About/>
        {/* Maybe no need skills can include under about
        the education probably also can */}
        <Skills/>
        <Education/>

        
        <Projects/>
        <Experience/>
        <Certification/>
    
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>

    </div>
   </BrowserRouter>
  )
}

export default App
