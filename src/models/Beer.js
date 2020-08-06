/* eslint-disable camelcase */
export default class Beer {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    description;

    /**
     * @type {string}
     */
    imageUrl;

    /**
     * @type {string}
     */
    tagline;

    /**
     * @type {string}
     */
    first_brewed;

    /**
     * @type {string}
     */
    abv;

    /**
     * @type {string}
     */
    ebc;

    /**
     * @type {string}
     */
    ibu;

    /**
     * @type {string}
     */
    ph;

    /**
     * @type {string}
     */
    srm;

    /**
     * @type {string}
     */
    contributed_by;

    /**
     * @type {string[]}
     */
    food_pairing;

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} description
     * @param {string} image_url
     * @param {string} tagline
     * @param {string} first_brewed
     * @param {string} abv
     * @param {string} ebc
     * @param {string} ibu
     * @param {string} ph
     * @param {string} srm
     * @param {string} contributed_by
     * @param {string[]} food_pairing
     */
    constructor({
      id,
      name,
      description,
      image_url,
      tagline,
      first_brewed,
      abv,
      ebc,
      ibu,
      ph,
      srm,
      contributed_by,
      food_pairing,
    }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.imageUrl = image_url;
      this.tagline = tagline;
      this.first_brewed = first_brewed;
      this.abv = abv;
      this.ebc = ebc;
      this.ibu = ibu;
      this.ph = ph;
      this.srm = srm;
      this.contributed_by = contributed_by;
      this.food_pairing = food_pairing;
    }
}
