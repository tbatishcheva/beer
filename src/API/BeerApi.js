const MAIN_API = 'https://api.punkapi.com/v2/beers';

export default class BeerApi {
  fetchAllBeer() {
    return fetch(`${MAIN_API}`)
      .then((res) => res.json())
      .catch();
  }

  /**
   * @param {number[]} ids
   * @return {Promise}
   */
  fetchBeersByIds(ids) {
    const params = ids.join('|');
    return fetch(`${MAIN_API}?ids/${params}`)
      .then((res) => res.json())
      .catch();
  }

  /**
   * @param {number} id
   * @return {Promise}
   */
  fetchBeerById(id) {
    return fetch(`${MAIN_API}/${id}`)
      .then((res) => res.json())
      .catch();
  }
}
