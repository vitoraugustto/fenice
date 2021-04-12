window.onload = function () {
  document.body.classList.remove("preload");

  const newsButton = document.getElementById("news-button");
  const emailNews = document.getElementById("email-news");

  const contactButton = document.getElementById("contact-button");
  const emailContact = document.getElementById("email-contact");
  const textAreaContact = document.getElementById("textarea-contact");

  const hamburguer = document.getElementById("menu-hamburguer");
  const menuMobile = document.getElementById("menu-mobile");

  const sendFormButton = document.getElementById("form-button");
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");
  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  const genero = document.getElementById("genero");
  const cep = document.getElementById("cep");
  const endereco = document.getElementById("endereco");
  const enderecoNumero = document.getElementById("enderecoNumero");
  const enderecoComplemento = document.getElementById("enderecoComplemento");
  const estado = document.getElementById("estado");
  const cidade = document.getElementById("cidade");
  // const tipoDoc = document.getElementById("tipoDoc");
  const numDoc = document.getElementById("numDoc");

  ///////////////////////////////////////////////////////
  function sendForm() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      login: {
        usuario: usuario.value,
        senha: senha.value,
      },
      cliente: {
        nome: nome.value,
        email: email.value,
        sexo: genero.value,
        telefone: telefone.value,
        endereco: {
          CEP: cep.value,
          logradouro: endereco.value,
          numero: enderecoNumero.value,
          complemento: enderecoComplemento.value,
          estado: estado.value,
          cidade: cidade.value,
        },
        documento: {
          // tipoDocumento: tipoDoc.value,
          numero: numDoc.value,
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
  ///////////////////////////////////////////////////////

  
  const singleProduct = [...document.getElementsByClassName("single-product")];
  const buttonProducts = [...document.getElementsByClassName("button-products")];

  // singleProduct.forEach((product) => {
  //   product.addEventListener("mouseenter", () => {
  //     product.style.height = "auto";
  //   })
  // });

  // singleProduct.forEach((product) => {
  //   product.addEventListener("mouseout", () => {
  //     product.style.height = "470px";
  //   })
  // });

  const dominios = [
    "@hotmail.com",
    "@outlook.com",
    "@gmail.com",
    "@yahoo.com",
    "@aluno.faculdadeimpacta.com",
  ];

  emailNews.addEventListener("keyup", () => {
    const inputEmailValue = emailNews.value.toLowerCase();

    if (dominios.some((dominio) => inputEmailValue.includes(dominio))) {
      newsButton.removeAttribute("disabled");
      newsButton.style.cursor = "pointer";
    } else {
      newsButton.setAttribute("disabled", true);
      newsButton.style.cursor = "not-allowed";
    }
  });

  [emailContact, textAreaContact].forEach((contactField) => {
    contactField.addEventListener("keyup", () => {
      const inputContactValue = emailContact.value.toLowerCase();
      const textAreaContactValue = textAreaContact.value;

      if (
        textAreaContactValue != "" &&
        dominios.some((dominio) => inputContactValue.includes(dominio))
      ) {
        contactButton.removeAttribute("disabled");
        contactButton.style.cursor = "pointer";
      } else {
        contactButton.setAttribute("disabled", true);
        contactButton.style.cursor = "not-allowed";
      }
    });
  });

  if (window.innerWidth <= 570) {
    var isOpen = 0;
    hamburguer.addEventListener("click", () => {
      isOpen += 1;
  
      if (isOpen == 1) {
        menuMobile.style.top = "0px";
        hamburguer.style.top = "180px";
      } else {
        menuMobile.style.top = "-170px";
        hamburguer.style.top = "10px";
  
        isOpen = 0;
      }
    });
  };


  [...document.getElementsByTagName("a")].forEach((a) =>
    a.classList.add("fromRight")
  );

  sendFormButton.addEventListener("click", () => {
    sendForm();
    // document.getElementsByClassName("container")[0].reset();
  });
};