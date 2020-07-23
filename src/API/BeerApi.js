const MAIN_API = 'https://api.punkapi.com/';

export default class BeerApi {
  fetchAllBeer() {
    return fetch(`${MAIN_API}v2/beers`)
      .then((res) => res.json())
      .catch();
  }
}
