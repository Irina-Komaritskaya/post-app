import Container from "react-bootstrap/Container";
import styles from "./comment.module.css";
export const Comment = ({ data }) => {
    console.log(data);
    return (
        <Container className={styles.comment}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.text}>{data.body}</div>
        </Container>
    );
};
