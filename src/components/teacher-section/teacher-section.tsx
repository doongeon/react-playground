import IconBoard from "../../common/components/icon-board/IconBoard";
import { IconBoardItem } from "../../common/components/icon-board/types";
import "./teacher-section.css";

const TeacherBoardItems: IconBoardItem[] = [
  new IconBoardItem(
    "Nicolas",
    "https://d1telmomo28umc.cloudfront.net/media/public/avatars/serranoarevalo-1679363190.jpg"
  ),
  new IconBoardItem(
    "Kevin Powell",
    "https://yt3.googleusercontent.com/ytc/AIdro_mQczyuvnXgEq8fApoOXpG2Yw_JKYqRA7kVOhNFuHLz9Vc=s176-c-k-c0x00ffffff-no-rj"
  ),
  new IconBoardItem(
    "Dave Gray",
    "https://yt3.googleusercontent.com/0eIqxAMRNI9gnG0HXSBnpFCmV5E5UjsxzZ3HtvG9Q9PD8QxnZRE9QWvuoiDS8HFEgeFd1Hc4=s176-c-k-c0x00ffffff-no-rj"
  ),
  new IconBoardItem(
    "Sebastian Lague",
    "https://yt3.googleusercontent.com/ytc/AIdro_khWt3vK98dhFYSgpIZZBli0zwd-dztKDv9r7rtOEtAVO8=s176-c-k-c0x00ffffff-no-rj"
  ),
  new IconBoardItem(
    "김정환",
    "https://yt3.googleusercontent.com/ytc/AIdro_nz74fohyHsY2RDx0yaCsaL7BrjZYzCFUglLIEDGCYKNzFK=s176-c-k-c0x00ffffff-no-rj"
  ),
  new IconBoardItem(
    "FEConf Korea",
    "https://yt3.googleusercontent.com/ytc/AIdro_kcTBOy2ItJxOql-mGmNvf7P0EK_fllBKb1FWfWpx6kHSg=s176-c-k-c0x00ffffff-no-rj"
  ),
];

export default function TeacherSection() {
  return (
    <section className="teacher-section">
      <div className="teacher-section__title-container">
        <h2 className="teacher-section__title">special thanks to</h2>
      </div>
      <IconBoard boardItems={TeacherBoardItems} />
    </section>
  );
}
