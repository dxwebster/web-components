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



class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    // cria um encapsulamento com ShadowRoot e anexa o PokemonCardTemplate
    this.attachShadow({ mode: 'open' }); 
    this.shadowRoot.appendChild(PokemonCardTemplate.content.cloneNode(true));

    // Get nos atributos e coloca nas respectivas tags do template
    const imageURL = this.getAttribute('avatar'); 
    this.shadowRoot.querySelector('img').setAttribute('src', imageURL);

    const title = this.getAttribute('title'); 
    this.shadowRoot.querySelector('h2').innerText = title;

    const subtitle = this.getAttribute('subtitle'); 
    this.shadowRoot.querySelector('h3').innerText = subtitle; 

    const text = this.getAttribute('text'); 
    this.shadowRoot.querySelector('p').innerText = text; 
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


