import Card from "react-bootstrap/Card";
import Badge from './Tags';

const MyCard = ({Imagen, Titulo, bg, textoBoton, descripcion}) => {
  return (
    <>
      <Card style={{ width: "15rem"}}>
        <Card.Img
          variant="top"
          src={Imagen}
        />
        <Card.Body>
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Badge bg={bg} textoBoton={textoBoton}></Badge>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
