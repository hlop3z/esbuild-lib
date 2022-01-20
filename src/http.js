function apiHandler(URL, OPTIONS) {
  return new Promise((myResolve, myReject) => {
    fetch(URL, OPTIONS)
      .then((response) => response.json())
      .then((json) => myResolve(json))
      .catch((error) => myReject(error));
  });
}

class Api {
  /* [API-REST]
   * get
   * post
   * put
   * patch
   * delete
   */
  constructor(baseURL, options) {
    this.host = baseURL;
    this.options = options;
    this.baseURL = (url) => baseURL + (!(url.startsWith('/') && baseURL.endsWith('/')) ? url : `${url.replace('/', '')}`);
  }

  /* Create - API */
  static create({ url = null, options = {} } = {}) {
    return new Api(url, options);
  }

  /* GET */
  ['get'](url = null, data = false) {
    const params = !data ? '' : `?${new URLSearchParams(data).toString()}`;
    const path = `${this.baseURL(url)}${params}`;
    const myoptions = { method: 'GET' };
    const options = { ...this.options, ...myoptions };
    return apiHandler(path, options);
  }

  /* POST */
  ['post'](url = null, data = false) {
    const path = `${this.baseURL(url)}`;
    const params = !data ? data : JSON.stringify(data);
    const myoptions = { method: 'POST' };
    if (data) { myoptions.body = params; }
    const options = { ...this.options, ...myoptions };
    return apiHandler(path, options);
  }

  /* PUT */
  ['put'](url = null, data = false) {
    const path = `${this.baseURL(url)}`;
    const params = !data ? data : JSON.stringify(data);
    const myoptions = { method: 'PUT' };
    if (data) { myoptions.body = params; }
    const options = { ...this.options, ...myoptions };
    return apiHandler(path, options);
  }

  /* DELETE */
  ['delete'](url = null, data = false) {
    const path = `${this.baseURL(url)}`;
    const params = !data ? data : JSON.stringify(data);
    const myoptions = { method: 'DELETE' };
    if (data) { myoptions.body = params; }
    const options = { ...this.options, ...myoptions };
    return apiHandler(path, options);
  }

  /* PATCH */
  ['patch'](url = null, data = false) {
    const path = `${this.baseURL(url)}`;
    const params = !data ? data : JSON.stringify(data);
    const myoptions = { method: 'PATCH' };
    if (data) { myoptions.body = params; }
    const options = { ...this.options, ...myoptions };
    return apiHandler(path, options);
  }
}

export default Api.create;
