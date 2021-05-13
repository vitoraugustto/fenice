document.body.classList.remove("preload");

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

///////////////////////////////////////////////////////
//Realiza Cadastro
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

var isLogged;

function Login() {
  console.log("OI GENTE");

  sessionStorage.setItem("Logado?", isLogged);

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
      window.location.href = window.location.href;

      isLogged = true;
      sessionStorage.setItem("Logado?", isLogged);

      sessionStorage.setItem("User", response.login.usuario);
      sessionStorage.setItem("Email", response.cliente.email);
    }
  });
}

login.addEventListener("click", () => {
  Login();
});
///////////////////////////////////////////////////////
//Envia Encomenda
function sendOrder() {
  const clientOrderEmail = document.getElementById("clientOrderEmail").value;
  const productsOrder = document.getElementById("productsOrder").value;
  const clientMessage = document.getElementById("clientMessage").value;
  // const buttonOrder = document.getElementById("buttonOrder");

  let orderMessage =
    "Email do cliente: " +
    clientOrderEmail +
    "\n\n" +
    productsOrder +
    "\n\n" +
    clientMessage;

  var settings = {
    url: "http://18.225.31.219:1880/encomenda",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      encomenda: orderMessage,
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
///////////////////////////////////////////////////////

if (sessionStorage.getItem("Logado?")) {
  const orderButton = document.getElementById("order");

  orderButton.style.display = "block";
}

const contactUs = document.getElementById("contactUs");
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
const signupButton = document.getElementById("signupButton");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const closeButton1 = document.getElementById("closeButton1");
const closeButton2 = document.getElementById("closeButton2");
const overlay = document.getElementById("overlay");

closeButton1.addEventListener("click", () => {
  signupForm.style.display = "none";
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

signupButton.addEventListener("click", () => {
  signupForm.style.display = "block";
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

// if (window.innerWidth <= 570) {

// }

[...document.getElementsByTagName("a")].forEach((a) =>
  a.classList.add("fromRight")
);

const purchaseButton = document.getElementById("btn-purchase");
const addToCartButtons = document.getElementsByClassName("button-products");

function cart() {
  var isOpen = false;

  const containerCart = document.getElementById("container-cart");
  function openCloseCart() {
    if (isOpen == false) {
      containerCart.style.left = "0px";

      isOpen = true;
    } else {
      containerCart.style.left = "-567px";

      isOpen = false;
    }
  }

  const cartImg = document.getElementById("cart-img");
  cartImg.addEventListener("click", openCloseCart);

  // for (var i = 0; i < addToCartButtons.length; i++) {
  //   var button = addToCartButtons[i];
  //   button.addEventListener("click", () => {
  //     containerCart.style.left = "0px";
  //     isOpen = true;
  //   });
  // }

  purchaseButton.addEventListener("click", () => {
    if (sessionStorage.getItem("Logado?")) {
      containerCart.style.left = "-567px";

      isOpen = false;
    }
  });
}

const cartItemTitle = document.getElementsByClassName("cart-item-title");
const cartItemPrice = document.getElementsByClassName("cart-item-price");

if (window.location.pathname == "/fenice/products.html") {
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("button-products");
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }

    document
      .getElementById("btn-purchase")
      .addEventListener("click", purchaseClicked);
  }

  function purchaseClicked() {
    if (sessionStorage.getItem("Logado?")) {
      alert("Os itens foram enviados para Encomenda!");

      var cartItems = document.getElementById("cart-items");
      while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
      }
      updateCartTotal();
    } else {
      alert("Você deve estar logado para Encomendar!");
    }
  }

  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }

  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }

  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    var title = shopItem.getElementsByClassName("product-name")[0].innerText;
    var price = shopItem.getElementsByClassName("product-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("product-image")[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
  }

  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementById("cart-items");
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("Este item já foi adicionado ao carrinho.");
        return;
      }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-item-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="styled-button btn-danger" type="button">REMOVER</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  }

  function updateCartTotal() {
    var cartItemContainer = document.getElementById("cart-items");
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("cart-price")[0];
      var quantityElement = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
      var price = parseFloat(priceElement.innerText.replace("R$", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementById("cart-total-price").innerText = "R$" + total;
  }

  cart();

  purchaseButton.addEventListener("click", () => {
    var priceAndNames = "";

    for (var i = 0; i < cartItemTitle.length; i++) {
      priceAndNames +=
        cartItemTitle[i].innerText + " " + cartItemPrice[i].innerText + "\n";
    }

    const cartTotalPrice =
      document.getElementById("cart-total-price").innerText;

    localStorage.setItem("Produtos", priceAndNames);
    localStorage.setItem("Valor total", cartTotalPrice);
  });

  const buttonProductAdded = document.getElementById("button-product-added");
  const boxAddedToCart = document.getElementById("added-to-cart");

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", () => {
      boxAddedToCart.style.display = "block";
    });
  }

  buttonProductAdded.onclick = () => {
    boxAddedToCart.style.display = "none";
    console.log(isLogged);
  };
}

if (window.location.pathname == "/fenice/order.html") {
  buttonOrder.onclick = () => {
    sendOrder();

    alert("Encomenda realizada com sucesso.");
    window.location.href = "/products.html";
  };

  const clientOrderEmail = document.getElementById("clientOrderEmail");

  clientOrderEmail.value = sessionStorage.getItem("Email");

  const productsOrder = document.getElementById("productsOrder");
  productsOrder.value =
    "Olá, eu gostei destes produtos: \n \n" +
    localStorage.getItem("Produtos") +
    "\nTotal: " +
    localStorage.getItem("Valor total");
}
