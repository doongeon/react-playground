import ContentSection from "../components/contents-section/ContentSection";
import Intro from "../components/intro/Intro";
import Philosophy from "../components/philosophy/Philosophy";
import TeacherSection from "../components/teacher-section/teacher-section";

export default function Home() {
  return (
    <>
      <Intro />
      <Philosophy />
      <ContentSection />
      <TeacherSection />
    </>
  );
}
