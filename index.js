const textos = {
  BR: {
    title: `TOM'S`,
    links: ["Inicio", "Cursos", "Eventos", "Contato"],
    btnNav: "SE INSCREVA",
    others: "CONHECER CURSOS",
    hero: {
      title: `Crie algo impactante com música`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      button: `COMECE AGORA`,
    },
    othersText: "E vários outros!",
    titleForm: "Receba materiais gratuitos no seu email",
    textReceber: "QUERO RECEBER",
  },

  ES: {
    title: `TOM'S`,
    links: ["Início", "Cursos", "Eventos", "Contacto"],
    btnNav: "RESGÍSTRATE",
    others: "CONOCER LOS CURSOS",
    hero: {
      title: `Crea algo impactante con música`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      button: `COMIENZA AHORA`,
    },
    othersText: "¡Y vários otros!",
    titleForm: "Recibir material grátis por e-mail",
    textReceber: "QUIERO RECIBIR",
  },
};

const logo = document.querySelector(".navbar__logo");
const links = document.querySelectorAll(".navbar__links");
const btnInsc = document.querySelector(".navbar__button");
const language = document.querySelectorAll("[idioma]");
const HeroTitle = document.querySelector("#HeroTitle");
const HeroDesc = document.querySelector("#HeroDesc");
const ButtonHero = document.querySelector("#ButtonHero");
const ButtonNav = document.querySelector(".navbar__button");
const btnOutros = document.getElementById("btnOutros");
const titleOutros = document.getElementById("titleOutros");
const titleForm = document.getElementById("titleForm");
const btnReceber = document.getElementById("btnReceber");

logo.textContent = textos.BR.title;

// lógica que muda de idioma na página
language.forEach((element) => {
  const idiomaCurrent = element.getAttribute("idioma");
  element.onclick = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].textContent = textos[idiomaCurrent].links[i];
    }

    HeroTitle.textContent = textos[idiomaCurrent].hero.title;
    HeroDesc.innerHTML = textos[idiomaCurrent].hero.desc;
    ButtonHero.textContent = textos[idiomaCurrent].hero.button;
    ButtonNav.textContent = textos[idiomaCurrent].btnNav;
    btnOutros.textContent = textos[idiomaCurrent].others;
    titleOutros.textContent = textos[idiomaCurrent].othersText;
    titleForm.textContent = textos[idiomaCurrent].titleForm;
    btnReceber.textContent = textos[idiomaCurrent].textReceber;

    element.classList.add("addBold");
    if (idiomaCurrent == "BR") {
      language[1].classList.remove("addBold");
    } else {
      language[0].classList.remove("addBold");
    }
  };
});
