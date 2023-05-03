const textos = {
  BR: {
    title: `TOM'S`,
    links: ['Inicio',
      'Cursos',
      'Eventos',
      'Contato'
    ],
    btnNav: 'SE INSCREVA',
    hero: {
      title: `Crie algo impactante com música`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      button: `COMECE AGORA`
    }
  },

  ES: {
    title: `TOM'S`,
    links: ['Início',
      'Cursos',
      'Eventos',
      'Contacto'
    ],
    btnNav: 'RESGÍSTRATE',
    hero: {
      title: `Crea algo impactante con música`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      button: `COMIENZA AHORA`
    }
  }
}

const logo = document.querySelector('.navbar__logo')
const links = document.querySelectorAll('.navbar__links')
const btnInsc = document.querySelector('.navbar__button')
const language = document.querySelectorAll('[idioma]')
const HeroTitle = document.querySelector("#HeroTitle")
const HeroDesc = document.querySelector("#HeroDesc")
const ButtonHero = document.querySelector("#ButtonHero")


logo.textContent = textos.BR.title

// lógica que muda de idioma na página
language.forEach(element => {
  const idiomaCurrent = element.getAttribute('idioma')
  element.onclick = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].textContent = textos[idiomaCurrent].links[i]
    }
    HeroTitle.textContent = textos[idiomaCurrent].hero.title
    HeroDesc.innerHTML = textos[idiomaCurrent].hero.desc
    ButtonHero.textContent = textos[idiomaCurrent].hero.button
  }
});

