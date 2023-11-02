import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Bem vindo, Clique no botão abaixo para adicionar um post</h1>
          <Button variant="primary">Primary</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
