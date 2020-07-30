/* eslint-disable */
const MAIN_API = 'https://api.punkapi.com/v2/beers';

export default class BeerApi {
  /**
   * @param {number} pageNumber
   * @return {Promise}
   */
  fetchAllBeer(pageNumber) {
    return fetch(`${MAIN_API}?page=${pageNumber}`)
      .then((res) => res.json())
      .catch();
  }

  /**
   * @param {number[]} ids
   * @return {Promise}
   */
  fetchBeersByIds(ids) {
    const params = ids.join('|');
    return fetch(`${MAIN_API}?ids=${params}`)
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
