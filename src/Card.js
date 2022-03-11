export default function Card(props) {
  let lista = function (item) {
    return <li class=" list-group-item">{item.ability.name}</li>;
  };

  let nomePokemon = props.pokemons.name;
  let habilidadePokemon = props.pokemons.abilities.map(lista);

  return (
    <div class="col-5 offset-4">
      <div class="card">
        <img
          src={props.pokemons.sprites.front_default}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">{nomePokemon.toUpperCase()}</h3>
          <p class="card-text"> Sobre o Pokemon</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h7>
              Habilidades:
              <p>{habilidadePokemon}</p>
            </h7>
          </li>
          <li class="list-group-item">
            <h7>Peso: {props.pokemons.weight}</h7>
          </li>
          <li class="list-group-item">
            <h7>Altura: {props.pokemons.height}</h7>
          </li>
          <li class="list-group-item">
            <h7>Tipo: {props.pokemons.type}</h7>
          </li>
        </ul>
      </div>
    </div>
  );
}
