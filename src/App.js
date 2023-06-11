import { Routes, Route } from "react-router-dom";
import { Posts } from "./pages/home";
import { UserPage } from "./pages/user";
import { Header } from "./components/header";
import { Home } from "./pages/home";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user/:id" element={<UserPage />} />
            </Routes>
        </>
    );
}

export default App;
