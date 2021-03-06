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

    if (response.statusCode == 200) {
      alert("Cadastro realizado.");

      window.location.reload();
    }
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

function Login() {
  var isLogged = "false";
  localStorage.setItem("Logado?", isLogged);

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
    if (response.statusCode == 200) {
      isLogged = "true";

      localStorage.setItem("Logado?", isLogged);
      localStorage.setItem("User", response.login.usuario);
      localStorage.setItem("Email", response.cliente.email);
      localStorage.setItem("Nome", response.cliente.nome);
      window.location.href = window.location.href;
    }
  });
}

const helloFulano = document.getElementById("helloFulano");

login.addEventListener("click", () => {
  Login();
});

///////////////////////////////////////////////////////
//Envia Encomenda
function sendOrder() {
  const clientOrderEmail = document.getElementById("clientOrderEmail").value;
  const productsOrder = document.getElementById("productsOrder").value;
  const clientMessage = document.getElementById("clientMessage").value;

  var orderMessage =
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

logoutButton.onclick = () => {
  isLogged = "false";
  localStorage.setItem("Logado?", isLogged);
  window.location.href = "/index.html";
};

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

newsButton.onclick = () => {
  alert(
    "Voc?? foi cadastrado na nossa newsletter. Aguarde por novidades no seu email cadastrado!"
  );
};

contactButton.onclick = () => {
  alert("Mensagem enviada, entraremos em contato no email inserido!");
};

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

  purchaseButton.addEventListener("click", () => {
    if (localStorage.getItem("Logado?")) {
      containerCart.style.left = "-567px";

      isOpen = false;
    }
  });
}

if (window.location.pathname == "/products.html") {
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
    if (localStorage.getItem("Logado?")) {
      alert("Os itens foram enviados para Encomenda!");

      var cartItems = document.getElementById("cart-items");
      while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
      }
      updateCartTotal();
    } else {
      alert("Voc?? deve estar logado para Encomendar!");
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
        alert("Este item j?? foi adicionado ao carrinho.");
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
            <input type="text" maxlength="2" onchange="onlyIntNumbers(this)" class="cart-quantity-input" value="1">
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

  function onlyIntNumbers(element) {
    element.value = element.value.replace(/[^0-9]/g, "");
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

  const cartItemTitle = document.getElementsByClassName("cart-item-title");
  const cartItemPrice = document.getElementsByClassName("cart-item-price");
  const cartItemQuantity = document.getElementsByClassName(
    "cart-quantity-input"
  );

  setInterval(() => {
    console.log(cartItemTitle.length);
    if (cartItemTitle.length == 0) {
      purchaseButton.setAttribute("disabled", true);
      purchaseButton.style.cursor = "not-allowed";
    } else {
      purchaseButton.removeAttribute("disabled");
      purchaseButton.style.cursor = "pointer";
    }
  }, 500);

  purchaseButton.addEventListener("click", () => {
    console.log("TESTEEER");

    var priceAndNames = "";

    for (var i = 0; i < cartItemTitle.length; i++) {
      priceAndNames +=
        cartItemTitle[i].innerText +
        "\nQuantidade: " +
        cartItemQuantity[i].value +
        " - Pre??o unit??rio: " +
        cartItemPrice[i].innerText +
        "\n\n";
    }

    const cartTotalPrice =
      document.getElementById("cart-total-price").innerText;

    localStorage.setItem("Produtos", priceAndNames);
    localStorage.setItem("Valor total", cartTotalPrice + ",00");
  });

  const buttonProductAdded = document.getElementById("button-product-added");
  const boxAddedToCart = document.getElementById("added-to-cart");

  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", () => {
      boxAddedToCart.style.display = "block";

      setTimeout(() => {
        boxAddedToCart.style.display = "none";
      }, 1200);
    });
  }

  // buttonProductAdded.onclick = () => {
  //   boxAddedToCart.style.display = "none";
  // };
}

if (window.location.pathname == "/order.html") {
  buttonOrder.onclick = () => {
    sendOrder();

    localStorage.removeItem("Produtos");
    localStorage.removeItem("Valor total");

    alert("Encomenda realizada com sucesso.");
    window.location.href = "/products.html";
  };

  const clientOrderEmail = document.getElementById("clientOrderEmail");

  clientOrderEmail.value = localStorage.getItem("Email");

  const productsOrder = document.getElementById("productsOrder");
  productsOrder.value =
    "Ol??, eu gostei destes produtos: \n \n" +
    localStorage.getItem("Produtos") +
    "\nTotal: " +
    localStorage.getItem("Valor total");
}

const orderButton = document.getElementById("order");

if (localStorage.getItem("Logado?") == "true") {
  Logged();
}

if (localStorage.getItem("Logado?") == "false") {
  localStorage.clear();
  notLogged();
}

function Logged() {
  const helloFulano = document.getElementById("helloFulano");
  helloFulano.innerText = `Ol??, ${localStorage.getItem("Nome")}`;

  orderButton.style.display = "block";
  logoutButton.style.display = "block";
  signupButton.style.display = "none";
  loginButton.style.display = "none";
}

function notLogged() {
  orderButton.style.display = "none";
  logoutButton.style.display = "none";
  signupButton.style.display = "block";
  loginButton.style.display = "block";
}
