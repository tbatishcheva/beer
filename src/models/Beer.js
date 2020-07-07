class Beer {
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
     * @param {number} id
     * @param {string} name
     * @param {string} description
     * @param {string} image_url
     */
    constructor({
      id,
      name,
      description,
      image_url,
    }) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.imageUrl = image_url;
    }
}

export default Beer;
