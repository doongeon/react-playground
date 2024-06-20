import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./components/profile/Profile";
import Nav from "./components/nav/Nav";
import Games from "./routes/Games";

function App() {
  return (
    <BrowserRouter>
      <Profile />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
