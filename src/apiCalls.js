import axios from "axios";
const BASE_URL = "https://www.breakingbadapi.com/api/";
const PokeApi = "https://pokeapi.co/api/v2/"

export async function envAPI(endpoint) {
    try {
      const response = await axios({
        url: `${BASE_URL}${endpoint}`,
        method: `GET`,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  
