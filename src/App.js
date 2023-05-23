import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route exact path="/home" component={Intro} />
        <Route exact path="/section1" component={Section1} />
        <Route exact path="/section2" component={Section2} />
        <Route exact path="/section3" component={Section3} />
      </Routes>

      <Navbar />

      <Intro />

      <Section1 />

      <Section2 />

      <Section3 />

      <Footer />
    </div>
  );
}

export default App;