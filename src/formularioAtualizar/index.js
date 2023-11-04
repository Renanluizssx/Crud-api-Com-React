import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function FormularioAtualizar({
  setShow,
  show,
  valorNome,
  valorPreco,
  valorUrl,
}) {
  function atualizar(dado) {
    console.log("nome", nome);
    console.log("valor", valor);
    console.log("foto", foto);
    handleClose();
  }
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [foto, setFoto] = useState("");
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Row>
      <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                  <Form.Label>Nome:</Form.Label>

                  <Form.Control
                    value={valorNome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                    type="text"
                    placeholder="Digite o nome do elemento"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                  <Form.Label>Preço:</Form.Label>
                  <Form.Control
                    value={valorPreco}
                    onChange={(event) => setValor(event.target.value)}
                    required
                    type="number"
                    placeholder="Digite apenas o número sem vírgula"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                  <Form.Label>Imagem:</Form.Label>
                  <Form.Control
                    value={valorUrl}
                    onChange={(event) => setFoto(event.target.value)}
                    required
                    type="text"
                    placeholder="Coloque url da Imagem"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={atualizar}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Col>
    </Row>
  );
}
export default FormularioAtualizar;
