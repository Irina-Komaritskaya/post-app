import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Posts } from "./components/posts";
import { User } from "./components/user";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="user/:id" element={<User />} />
            {/* <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
    );
}

export default App;
