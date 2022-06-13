import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import MyProjects from "./projects/MyProjects"

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <DistantWork/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
