function Adicionar({ nome }) {
  const obj = {
    nome: nome,
  };
  console.log(obj);
  window.alert("teste");
  // fetch("https://profrodolfo.com.br/api/put/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     //retorno json:
  //     console.log(data);
  //   });

  return <div>d\sdsd</div>;
}
export default Adicionar;
