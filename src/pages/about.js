import { User } from "../components/user";
import Row from "react-bootstrap/Row";

export const About = () => {
    const user = {
        username: "Irina",
        name: "Irina Komaritskaia",
        email: "reena.message@gmail.com",
        website: "github.com/Irina-Komaritskaya",
    };
    return (
        <Row md={4} className="justify-content-center">
            <User user={user} />
        </Row>
    );
};
