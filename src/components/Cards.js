import Card from "react-bootstrap/Card";
import styles from "../App.module.css";

function Cards(props) {
  return (
    <Card className={styles.gridcard}>
      <Card.Body>
        <Card.Title className={styles.gridcardtitle}>{props.title}</Card.Title>
        <Card.Text className={styles.gridcardtext}>{props.text}</Card.Text>
      </Card.Body>
      <Card.Img className={styles.gridcardimg} variant="top" src={props.Icon} />
    </Card>
  );
}

export default Cards;
