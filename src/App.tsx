import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Intro from "./components/intro/Intro";
import Gallery from "./components/gallery/Gallery";
import TeacherSection from "./components/teacher-section/teacher-section";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Nav />
      <Intro />
      <Gallery />
      <TeacherSection />
      <div className="footer">
        <span>https://github.com/doongeon</span>
        <span>ndmb2012@gamil.com</span>
      </div>
    </>
  );
}

export default App;
