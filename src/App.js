import './App.css';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import MySkills from './components/MySkills';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      
      <div className="contacts-box">
        <Contacts />
      </div>
      
      <div className="info-box">
        <AboutMe />
      </div>
      
      <div className="skills-box">
        <MySkills />
      </div>

      <div className="works-box">
        <Works />
      </div>
    </div>
  );
}

export default App;
