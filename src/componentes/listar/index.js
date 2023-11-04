import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { del } from "../../serviços";
import FormularioAtualizar from "../../formularioAtualizar";
import { useState } from "react";
function Listar({ id, nome, valor, foto }) {
  const [valueNome, setValueNome] = useState("");
  const [valuePreco, setValuePreco] = useState(0);
  const [valueFoto, setValueFoto] = useState("");
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  function deletar(id) {
    del(id);
  }
  function editar(id) {
    handleShow();
    fetch(`https://profrodolfo.com.br/api/listar/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res.forEach((res) => {
          const valorNome = res.nome;
          const valorPreco = res.valor;
          const valorUrl = res.foto;
          setValueNome(valorNome);
          setValuePreco(valorPreco);
          setValueFoto(valorUrl);
        });
      });
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex flex-wrap">
          <Card>
            <Card.Img variant="top" className="h-100" src={foto} />
            <Card.Body>
              <Card.Title>{nome}</Card.Title>
              <Card.Text>R$ {valor}</Card.Text>
              <Button variant="primary" onClick={() => editar(id)}>
                Editar
              </Button>
              <Button onClick={() => deletar(id)} variant="danger">
                Deletar
              </Button>
            </Card.Body>
          </Card>
          <FormularioAtualizar
            setShow={setShow}
            handleShow={handleShow}
            show={show}
            valorNome={valueNome}
            valorPreco={valuePreco}
            valorUrl={valueFoto}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default Listar;
