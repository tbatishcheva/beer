/* eslint-disable */
const MAIN_API = 'https://api.punkapi.com/v2/beers';

export default class BeerApi {
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

  /**
   * @param {Object} param
   * @param {number} pageNumber
   * @return {Promise}
   */
  fetchBeerByParam(param, pageNumber) {
    let urlParams = [];
    if (param && Object.keys(param).length > 0) {
      Object.keys(param).forEach(key=>{
        urlParams.push( `${key}=${param[key]}`);
      })
    }

    urlParams = urlParams.join('&');

    return fetch(`${MAIN_API}?${urlParams}&page=${pageNumber}`)
      .then((res) => res.json())
      .catch();
  }
}
