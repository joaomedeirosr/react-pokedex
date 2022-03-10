import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import axios from "axios";

import { useState } from "react";

export default function Home() {
  let [pokemon, setPokemon] = useState();
  async function carregar(evento) {
    let codigo = evento.target.value;
    let resultado = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + codigo
    );

    setPokemon(resultado.data);
  }
  return (
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <Header />

      <main>
        <h1> Pesquise o Pokemon</h1>
        <div>
          <input
            type="number"
            min="1"
            max="200"
            onChange={carregar}
            class="form-control"
            placeholder=" Digite o ID"
          />
        </div>
        <hr class="col-3 col-md-2 mb-5" />

        <div class="row g-5"> {pokemon ? <Card /> : ""}</div>
      </main>
      <Footer />
    </div>
  );
}
