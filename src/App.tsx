import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Intro from "./components/intro/Intro";
import TeacherSection from "./components/teacher-section/teacher-section";
import "./common/style/animations.css";
import Philosophy from "./components/philosophy/Philosophy";
import ContentSection from "./components/contents-section/ContentSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Nav />
      <Intro />
      <Philosophy />
      <ContentSection />
      <TeacherSection />
    </div>
  );
}

export default App;
