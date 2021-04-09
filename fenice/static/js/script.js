window.onload = function () {
  import sendForm from "./backend";

  document.body.classList.remove("preload");

  const newsButton = document.getElementById("news-button");
  const emailNews = document.getElementById("email-news");

  const contactButton = document.getElementById("contact-button");
  const emailContact = document.getElementById("email-contact");
  const textAreaContact = document.getElementById("textarea-contact");

  const hamburguer = document.getElementById("menu-hamburguer");
  const menuMobile = document.getElementById("menu-mobile");

  const sendFormButton = document.getElementById("form-button");
  const user = document.getElementById("user");
  const password = document.getElementById("password");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");
  const name = document.getElementById("name");
  const phoneNum = document.getElementById("phoneNum");
  const genre = document.getElementById("genre");
  const address = document.getElementById("address");
  const addressNumber = document.getElementById("addressNumber");
  const addresComplement = document.getElementById("addresComplement");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const docType = document.getElementById("docType");
  const cpf = document.getElementById("cpf");
  const cnpj = document.getElementById("cnpj");

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

  [...document.getElementsByTagName("a")].forEach((a) =>
    a.classList.add("fromRight")
  );

  sendFormButton.addEventListener("click", () => {
    sendForm();

    console.log("Evento capturado.");
  });

  docType.addEventListener("change", () => {
    if (docType.value == "cpf") {
      cpf.style.display = "inline-block";
      cnpj.style.display = "none";
    } else {
      cnpj.style.display = "inline-block";
      cpf.style.display = "none";
    }
  });
};
