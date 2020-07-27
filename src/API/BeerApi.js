const MAIN_API = 'https://api.punkapi.com/';

export default class BeerApi {
  fetchAllBeer() {
    return fetch(`${MAIN_API}v2/beers`)
      .then((res) => res.json())
      .catch();
  }

  /**
   * @param {number[]} ids
   * @return {Promise}
   */
  fetchBeersByIds(ids) {
    const promises = ids
      .map((id) => fetch(`${MAIN_API}v2/beers/${id}`)
        .then((res) => res.json()));
    return Promise.all(promises)
      .then((res) => res.flat())
      .catch();
  }
}
