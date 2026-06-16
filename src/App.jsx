import "./App.css";
import Home from "./pages/home/Home";
import ProjectLibrary from "./pages/projectLibrary/ProjectLibrary";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";


// image import from assets example
import animation from './assets/Home/animation.png'

function App() {

  // image from public
  const publicProject = "/images/projects/Project01-instructions.png"
  

  return (
  <>
    <h1>Lets start from here</h1>
    
   <img src={animation} alt="animation image" />

    <img src="/images/projects/Project01-instructions.png" alt="image" /> 

    <img src={publicProject} alt="public project" />   


    <Home></Home>

    <ProjectLibrary></ProjectLibrary>

    <StudentDashboard></StudentDashboard>

  </>
  );
}

export default App;