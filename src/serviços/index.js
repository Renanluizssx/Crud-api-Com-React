export const put = (produto) => {
  console.log(produto);
  fetch("https://profrodolfo.com.br/api/put/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
export const del = (id) => {
  let confirm = window.confirm("Deseja mesmo deletar");
  if (confirm) {
    fetch(`https://profrodolfo.com.br/api/delete/${id}`)
      .then((res) => res.json())
      .then(() => window.alert("Excluído"));
  }
};
export const atualizar = (produto) => {
  console.log(produto);
  // fetch("https://profrodolfo.com.br/api/update/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(produto),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     //retorno json:
  //     console.log(data);
  //   });
};
