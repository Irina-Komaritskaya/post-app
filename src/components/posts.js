import { Post } from "./post";
import Container from "react-bootstrap/Container";
import { Paging } from "./pagination";
import { SpinnerDelay } from "../hocs/spiner-hoc";

export const Posts = ({ posts }) => {
    return (
        <SpinnerDelay>
            <Container>
                <Paging
                    items={posts.map((x) => (
                        <Post data={x} key={x.id} />
                    ))}
                ></Paging>
            </Container>
        </SpinnerDelay>
    );
};
