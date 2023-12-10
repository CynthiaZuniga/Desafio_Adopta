import Badge from 'react-bootstrap/Badge';

const Etiqueta = ({bg, textoBoton}) => {
  return (
    <>
      <Badge bg={bg}>{textoBoton}</Badge>
      
    </>
  );
}

export default Etiqueta;