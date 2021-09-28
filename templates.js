export const pokeCardTemplate = `
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
      margin-left: 20px; 
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

