import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "../../componentes/formulario";
import Listar from "../../componentes/listar";
import { useState } from "react";
function Home() {
  const [lista, setListar] = useState([]);
  fetch("https://profrodolfo.com.br/api/listar/")
    .then((res) => res.json())
    .then((res) => {
      setListar(res);
    });

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center flex-column" xs={12}>
          <h1>Clique no botão para adicionar um Elemento</h1>
          <Formulario />
          <Row className="d-flex flex-row">
            <Col xs={12}>
              {lista.map((object) => (
                <Listar
                  key={object.id}
                  id={object.id}
                  nome={object.nome}
                  valor={object.valor}
                  foto={object.foto}
                />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
