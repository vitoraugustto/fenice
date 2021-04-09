export function sendForm() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    login: {
      usuario: user.value,
      senha: password.value,
    },
    cliente: {
      nome: name.value,
      email: email.value,
      sexo: genre.value,
      telefone: phoneNum.value,
      endereco: {
        CEP: cep.value,
        logradouro: address.value,
        numero: addressNumber.value,
        complemento: addresComplement.value,
        estado: state.value,
        cidade: city.value,
      },
      documento: {
        tipoDocumento: docType.value,
        CPFNumero: cpf.value,
        CNPJNumero: cnpj.value,
      },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://18.225.31.219:1880/cliente", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
