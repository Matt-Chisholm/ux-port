import "../styles/App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";

function App() {
  return (
    <div className='main-container'>
      <div className='main-card'>
        <Nav />
      </div>
    </div>
  );
}

export default App;
