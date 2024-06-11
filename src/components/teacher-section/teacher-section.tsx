import { useEffect, useRef } from "react";
import "./teacher-section.css";
import { getElementsByClassName } from "../../common/utils/getElementByClassName";
import TeacherItem from "./teacher-item";

export class Teacher {
  name: string;
  avatar: string;

  constructor(name: string, avatar: string) {
    this.name = name;
    this.avatar = avatar;
  }
}

const teachers: Teacher[] = [
  new Teacher(
    "Nicolas",
    "https://d1telmomo28umc.cloudfront.net/media/public/avatars/serranoarevalo-1679363190.jpg"
  ),
  new Teacher(
    "Kevin Powell",
    "https://yt3.googleusercontent.com/ytc/AIdro_mQczyuvnXgEq8fApoOXpG2Yw_JKYqRA7kVOhNFuHLz9Vc=s176-c-k-c0x00ffffff-no-rj"
  ),
  new Teacher(
    "Dave Gray",
    "https://yt3.googleusercontent.com/0eIqxAMRNI9gnG0HXSBnpFCmV5E5UjsxzZ3HtvG9Q9PD8QxnZRE9QWvuoiDS8HFEgeFd1Hc4=s176-c-k-c0x00ffffff-no-rj"
  ),
  new Teacher(
    "Sebastian Lague",
    "https://yt3.googleusercontent.com/ytc/AIdro_khWt3vK98dhFYSgpIZZBli0zwd-dztKDv9r7rtOEtAVO8=s176-c-k-c0x00ffffff-no-rj"
  ),
  new Teacher(
    "김정환",
    "https://yt3.googleusercontent.com/ytc/AIdro_nz74fohyHsY2RDx0yaCsaL7BrjZYzCFUglLIEDGCYKNzFK=s176-c-k-c0x00ffffff-no-rj"
  ),
  new Teacher(
    "FEConf Korea",
    "https://yt3.googleusercontent.com/ytc/AIdro_kcTBOy2ItJxOql-mGmNvf7P0EK_fllBKb1FWfWpx6kHSg=s176-c-k-c0x00ffffff-no-rj"
  ),
];

function addFadeInAnimationOnTeacherItem() {
  const itemContainers = getElementsByClassName("teacher-item");
  itemContainers.forEach((itemContainer) => {
    itemContainer.classList.add("fade-in-animation");
  });
}

export default function TeacherSection() {
  const observingTarget = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) addFadeInAnimationOnTeacherItem();
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
    });
    observer.observe(observingTarget.current as HTMLElement);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <section className="teacher-section">
      <div className="teachers-container">
        <div className="teachers-title-container">
          <h2 className="teachers-title">Thanks to</h2>
        </div>
        <div ref={observingTarget} className="teacher-board-container">
          <div className="teacher-board">
            <ul className="teachers-wrap">
              {teachers.map((teacher, index) => <TeacherItem key={index} teacher={teacher} index={index} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
