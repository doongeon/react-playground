import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile_wrap">
            <div className="home_img"></div>
            <div className="user_info">
                <img
                    className="user_avatar"
                    src="https://avatars.githubusercontent.com/u/87890694?s=400&u=a3e45f1cb8def0c52212d536cc9c13c7d514d921&v=4"
                />
                <h1 className="user_name">나동건</h1>
                <span className="user_introduction">
                    creating web, app services
                </span>
                <ul className="user_stat">
                    <li>like</li>
                    <li>게임 3개</li>
                </ul>
            </div>
        </div>
    );
}
