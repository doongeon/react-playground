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
        <div className="options">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Communication / Share_iOS_Export">
                <path
                  id="Vector"
                  d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10"
                  stroke="#616165"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </g>
          </svg>
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="6" cy="12" r="2" fill="#616165"></circle>
              <circle cx="12" cy="12" r="2" fill="#616165"></circle>
              <path
                d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                fill="#616165"
              ></path>
            </g>
          </svg>
        </div>
        <h1 className="user_name">나동건</h1>
        <span className="user_introduction">creating web, app services</span>
        <ul className="user_stat">
          <li>좋아요 100</li>
          <li>포스트 12개</li>
        </ul>
      </div>
    </div>
  );
}
