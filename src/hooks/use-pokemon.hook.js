import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/config";

function usePokemon() {
  const [pokemon, setPokemon] = useState();
  const loadData = async () => {
    const result = await axios.get(`${baseURL}pokemon?limit=10&offset=0`);
    setPokemon(result);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    pokemon,
  };
}

export { usePokemon };
