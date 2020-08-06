export default class Property {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    value;

    /**
     * @param {string} name
     * @param {string} value
     */
    constructor({ name, value }) {
      this.name = name;
      this.value = value;
    }
}
