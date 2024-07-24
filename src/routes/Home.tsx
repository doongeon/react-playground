import ContentSection from "../components/contents-section/ContentSection";
import Introduction from "../components/intro/Introduction";
import Philosophy from "../components/philosophy/Philosophy";
import TeacherSection from "../components/teacher-section/teacher-section";

export default function Home() {
    return (
        <>
            <Introduction />
            <Philosophy />
            <ContentSection />
            <TeacherSection />
        </>
    );
}
