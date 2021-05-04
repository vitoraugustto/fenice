document.body.classList.remove("preload");

///////////////////////////////////////////////////////
//Cadastro de Usuário
const sendFormButton = document.getElementById("form-button");
const addressComplement = document.getElementById("addressComplement");
const addressNumber = document.getElementById("addressNumber");
const phoneNumber = document.getElementById("phoneNumber");
const clientGenre = document.getElementById("clientGenre");
const clientEmail = document.getElementById("clientEmail");
const clientName = document.getElementById("clientName");
const docNumber = document.getElementById("docNumber");
const password = document.getElementById("password");
const address = document.getElementById("address");
const state = document.getElementById("state");
const user = document.getElementById("user");
const city = document.getElementById("city");
const cep = document.getElementById("cep");

// function sendForm() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     login: {
//       usuario: user.value,
//       senha: password.value,
//     },
//     cliente: {
//       nome: clientName.value,
//       email: clientEmail.value,
//       sexo: clientGenre.value,
//       telefone: phoneNumber.value,
//       endereco: {
//         CEP: cep.value,
//         logradouro: address.value,
//         numero: addressNumber.value,
//         complemento: addressComplement.value,
//         estado: state.value,
//         cidade: city.value,
//       },
//       documento: {
//         numero: docNumber.value,
//       },
//     },
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://18.225.31.219:1880/cliente", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

function sendForm() {
  var settings = {
    url: "http://18.225.31.219:1880/cliente",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      login: {
        usuario: user.value,
        senha: password.value,
      },
      cliente: {
        nome: clientName.value,
        email: clientEmail.value,
        sexo: clientGenre.value,
        telefone: phoneNumber.value,
        endereco: {
          CEP: cep.value,
          logradouro: address.value,
          numero: addressNumber.value,
          complemento: addressComplement.value,
          estado: state.value,
          cidade: city.value,
        },
        documento: {
          numero: docNumber.value,
        },
      },
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

sendFormButton.addEventListener("click", () => {
  sendForm();
});

///////////////////////////////////////////////////////
//Realiza Login
const loginUser = document.getElementById("loginUser");
const loginPassword = document.getElementById("loginPassword");
const login = document.getElementById("login");

// function Login() {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     usuario: loginUser.value,
//     senha: loginPassword.value,
//   });

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://18.225.31.219:1880/login", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

function Login() {
  var settings = {
    url: "http://18.225.31.219:1880/login",
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      usuario: loginUser.value,
      senha: loginPassword.value,
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response.statusCode);

    if (response.statusCode == 200) {
      window.location.href = "products.html";
    } else {
      console.log("not");
    }
  });
}

const contactUs = document.getElementById("contactUs");
login.addEventListener("click", () => {
  Login();
});
///////////////////////////////////////////////////////

const contactForm = document.getElementById("contactForm");

contactUs.addEventListener("click", () => {
  contactForm.scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    contactForm.style.filter = "brightness(1.3)";
  }, 1000);

  setTimeout(() => {
    contactForm.style.filter = "brightness(1)";
  }, 1300);
});

const loginButton = document.getElementById("loginButton");
const signinButton = document.getElementById("signinButton");

const loginForm = document.getElementById("loginForm");
const signinForm = document.getElementById("signinForm");

const closeButton1 = document.getElementById("closeButton1");
const closeButton2 = document.getElementById("closeButton2");
const overlay = document.getElementById("overlay");

closeButton1.addEventListener("click", () => {
  signinForm.style.display = "none";
  overlay.style.display = "none";
});

closeButton2.addEventListener("click", () => {
  loginForm.style.display = "none";
  overlay.style.display = "none";
});

loginButton.addEventListener("click", () => {
  loginForm.style.display = "block";
  overlay.style.display = "block";
});

signinButton.addEventListener("click", () => {
  signinForm.style.display = "block";
  overlay.style.display = "block";
});

const dominios = [
  "@hotmail.com",
  "@outlook.com",
  "@gmail.com",
  "@yahoo.com",
  "@aluno.faculdadeimpacta.com",
];

const newsButton = document.getElementById("news-button");
const emailNews = document.getElementById("email-news");

const contactButton = document.getElementById("contact-button");
const emailContact = document.getElementById("email-contact");
const textAreaContact = document.getElementById("textarea-contact");

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

const hamburguer = document.getElementById("menu-hamburguer");
const menuMobile = document.getElementById("menu-mobile");

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
}

[...document.getElementsByTagName("a")].forEach((a) =>
  a.classList.add("fromRight")
);

var addToCartButtons = document.getElementsByClassName("button-products");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addOrder);
}

function addOrder(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  var name = shopItem.getElementsByClassName("product-name")[0].innerText;
  var price = shopItem.getElementsByClassName("product-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("product-image")[0].src;

  localStorage.setItem("Product Name", name);
  localStorage.setItem("Product Price", price);
  localStorage.setItem("Product Image", imageSrc);

  console.log(name, price, imageSrc);
  alert("Item adicionado ao formulário de encomenda!");
}

if (window.location.pathname == "/order.html") {
  var textarea = document.getElementById("textarea");

  textarea.value = "Olá, eu gostei dos seguintes produtos: Ainda não tá feito.";
}
