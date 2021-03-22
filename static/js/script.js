window.onload = function() {

  document.body.classList.remove('preload')

  const newsButton = document.getElementById('news-button')
  const emailNews = document.getElementById('email-news')
  
  const contactButton = document.getElementById('contact-button')
  const emailContact = document.getElementById('email-contact')
  const textAreaContact = document.getElementById('textarea-contact')

  const hamburguer = document.getElementById('menu-hamburguer') 
  const menuMobile = document.getElementById('menu-mobile')
  const menuDesktop = document.getElementById('menu-desktop')


  const dominios = [
    "@hotmail.com", "@outlook.com", "@gmail.com", "@yahoo.com", "@aluno.faculdadeimpacta.com"
  ];

  // if (newsButton.hasAttribute('disabled')) {
  //   console.log("Not allowed!")
  // };

  emailNews.addEventListener('keyup', function() {
    const inputEmailValue = emailNews.value.toLowerCase();

    if (dominios.some(dominio => inputEmailValue.includes(dominio))) {
      newsButton.removeAttribute('disabled');
      newsButton.style.cursor = 'pointer';
      
    } else {
      newsButton.setAttribute('disabled', true);
      newsButton.style.cursor = 'not-allowed';
    };
  });

  [emailContact, textAreaContact].forEach((contactField) => {
    contactField.addEventListener('keyup', function() {
      const inputContactValue = emailContact.value.toLowerCase();
      const textAreaContactValue = textAreaContact.value;
    
      if (textAreaContactValue != "" && dominios.some(dominio => inputContactValue.includes(dominio))) {
        contactButton.removeAttribute('disabled');
        contactButton.style.cursor = 'pointer';
        
      } else {
        contactButton.setAttribute('disabled', true);
        contactButton.style.cursor = 'not-allowed';
      };
    });
  });

  var isOpen = 0;
    hamburguer.addEventListener('click', function() {
        isOpen += 1;

        if (isOpen == 1) {
            menuMobile.style.top = '0px';
            hamburguer.style.top = '180px';

        } else {
            menuMobile.style.top = '-170px'
            hamburguer.style.top = '10px';

            isOpen = 0;
        };
      });

  [...document.getElementsByTagName('a')].forEach((a) => a.classList.add('fromRight'));
};