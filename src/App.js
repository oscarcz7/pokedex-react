import PokemonCard from "./components/Card";
import { usePokemon } from "./hooks/use-pokemon.hook";

function App() {
  const { pokemon } = usePokemon();

  console.log(pokemon);
  return (
    <div>
      <PokemonCard />
    </div>
  );
}

export default App;
