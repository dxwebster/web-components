
import { pokeCardTemplate } from "./templates.js";
import { pokemonsTexts } from "./texts.js";

const PokemonCardTemplate = document.createElement('template');
PokemonCardTemplate.innerHTML = pokeCardTemplate;

class PokeCards extends HTMLElement {
  
  constructor() {
    super();
    this.showInfo = true;

    // cria um encapsulamento com ShadowRoot
    const shadow = this.attachShadow({ mode: 'open' }); 

    pokemonsTexts.map(item => {
      const cardClone = PokemonCardTemplate.content.cloneNode(true)
      cardClone.querySelector('img').setAttribute('src', item.avatar);
      cardClone.querySelector('h2').innerText = item.title;
      cardClone.querySelector('h3').innerText = item.subtitle;
      cardClone.querySelector('p').innerText = item.text;
      shadow.appendChild(cardClone);
    })
  }

  // funções para o toogle
  toggleInfo() {
    this.showInfo = !this.showInfo;
    
    const info = this.shadowRoot.querySelector('.toogle');
    const infoBtn = this.shadowRoot.querySelector('#toggle-info');

    if (this.showInfo) {
      info.style.display = 'flex';
      infoBtn.innerText = 'Hide info';
    } else {
      info.style.display = 'none';
      infoBtn.innerText = 'Show info';
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('poke-cards', PokeCards);


