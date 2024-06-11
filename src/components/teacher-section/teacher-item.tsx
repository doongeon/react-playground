import { useEffect, useRef } from "react";
import "./teacher-item.css";
import { Teacher } from "./teacher-section";

interface TeacherItemProps {
  teacher: Teacher;
  index: number;
}

export default function TeacherItem({ teacher, index }: TeacherItemProps) {
  const teachersItem = useRef<HTMLLIElement | null>(null);
  const setNthInClassName = () => {
    teachersItem.current!.style.setProperty("--n", index + "");
  };

  useEffect(() => {
    setNthInClassName();
  });

  return (
    <li ref={teachersItem} className="teacher-item">
      <div className="teacher-image-container">
        <img className="teacher-image" src={teacher.avatar} />
      </div>
      <h2 className="teacher-name">{teacher.name}</h2>
    </li>
  );
}
