import { Routes, Route } from "react-router-dom";
import { Posts } from "./components/posts";
import { User } from "./components/user";
import { Header } from "./components/header";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="user/:id" element={<User />} />
            </Routes>
        </>
    );
}

export default App;
