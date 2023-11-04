import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { atualizar } from "../serviços";
function FormularioAtualizar({
  setShow,
  show,
  valorNome,
  valorPreco,
  valorUrl,
}) {
  const [nome, setNome] = useState(valorNome);
  const [valor, setValor] = useState(valorPreco);
  const [foto, setFoto] = useState(valorUrl);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  function atualizarProduto() {
    const produto = {
      nome: nome,
      preco: valor,
      url: foto,
    };
    atualizar(produto);
    handleClose();
  }
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
              <Button variant="primary" onClick={atualizarProduto}>
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
