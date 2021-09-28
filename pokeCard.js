const PokemonCardTemplate = document.createElement('template');

PokemonCardTemplate.innerHTML = `
    <style>
        .poke-card {
          
          width: 100%;
          padding: 20px 0;

          background: #f4f4f4;
          font-family: Arial, sans-serif;

          margin-bottom: 25px;
          border-bottom: #1a1a1a 5px solid;
        }

        .poke-card img {
            width: 170px;
            height: 185px;
            margin-right: 25px;
            padding: 0 50px;
        }

        .poke-card .toogle {
          display: flex;
        }

        .poke-card #toggle-info {
            cursor: pointer;
            background: #1a1a1a;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
            margin-left: 20px
        }
    </style>

    <section class="poke-card">
    
      <main class="toogle">
        <img />
        
        <div>
          <h2></h2>
          <div class="poke-profile">
            <h2></h3>
            <h3></h3>
            <p></p>
          </div>
        </div>

      </main>

      <button id="toggle-info">Hide info</button>
    </section>

`;

const texts = [
  {
    title: "Pikachu",
    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    subtitle: "Esse é o pokemon mais famoso",
    text: "O pikachu é amarelo e amigo do Ash",
  },
  {
    title: "Zubat",
    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    subtitle: "Esse é o pokemon é um morcego",
    text: "O zubat é um morcego e esse é o texto falando sobre ele",
  },
  {
    title: "Jigglypuff",
    avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    subtitle: "Pokemonzinho Rosa",
    text: "Texto falando do jigglypuff, o pokemon rosa.",
  },

];


const sectionCards = document.querySelector("container");
class PokeCard extends HTMLElement {
  
  constructor() {
    super();
    this.showInfo = true;

    // cria um encapsulamento com ShadowRoot
    const shadow = this.attachShadow({ mode: 'open' }); 

    texts.map(item => {
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

window.customElements.define('poke-card', PokeCard);


