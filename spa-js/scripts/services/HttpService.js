// const RESULT_SUCCESS_CODE = 200;

export const HttpService = {
  setRequest(url) {
    return fetch(url).then(res => res.json());

    // TODO: error handling
    // BUG: ADD LISTENERS AFTER FILTERING
  },

  setMultipleRequests(urls) {
    const requests = urls.map(url => HttpService.setRequest(url));
    return Promise.all(requests);
  }
}
