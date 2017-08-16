import rp from 'request-promise';

const URL = 'https://api.chucknorris.io/jokes/random';

export default {
  hitme: () =>
    rp({ url: URL, json: true })
      .then(response => response.value || null),
};
