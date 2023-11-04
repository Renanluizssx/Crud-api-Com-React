import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { put } from "../../serviços/index";
function Formulario() {
  const [valorNome, setValorNome] = useState("");
  const [valorPreco, setValorPreco] = useState(0);
  const [valorImagem, setValorImagem] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const EnviarAApi = () => {
    const obj = {
      nome: valorNome,
      valor: valorPreco,
      foto: valorImagem,
    };

    put(obj);
    handleClose();
  };
  return (
    <Row>
      <Col>
        <Button variant="primary" onClick={handleShow}>
          Clique aqui para adicionar um elemento
        </Button>
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
                    onChange={(event) => setValorNome(event.target.value)}
                    required
                    type="text"
                    placeholder="Digite o nome do elemento"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                  <Form.Label>Preço:</Form.Label>
                  <Form.Control
                    onChange={(event) => setValorPreco(event.target.value)}
                    required
                    type="number"
                    placeholder="Digite apenas o número sem vírgula"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                  <Form.Label>Imagem:</Form.Label>
                  <Form.Control
                    onChange={(event) => setValorImagem(event.target.value)}
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
              <Button variant="primary" onClick={EnviarAApi}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Col>
    </Row>
  );
}
export default Formulario;
