# TvMaze

**TvMaze API wrapper for Node.js, featuring:**

* [TvMaze api methods](http://www.tvmaze.com/api)
* Promises


## Example usage

### Setup

```js

npm install tvmaze.com

```

### Initialize

```js
const TVMaze = require('tvmaze.com');

const tvmaze = new TVMaze();

tvmaze
  .getPopulars()
  .then(data =>
    data.map(
      show => ({
        name: show.name,
        status: show.status,
        rating: show.rating.average,
      })
    )
  )
  .then(console.log.bind(console));

```

## Methods

* **searchShow(name)**

* **searchPeople(name)**

* **getShow(showId, embed)**

* **getPeople(id, embed)**

* **lookupShow(params)**

* **schedule({ country, date })**

* **getCastCredits(id, embed)**

* **getCrewCredits(id, embed)**

* **getShowSeasons(showId)**

* **getShowSeasonEpisodes(showId, season)**

* **getShowSeasonEpisode(showId, season, number)**

* **getEpisodes(showId)**

* **getEpisodeById(episodeId)**

* **getCast(showId)**

* **getCrew(showId)**

* **getUpdates()**

* **getPopulars(limit)**

## License

The MIT License (MIT) - author: Ivo Reis [reis.ivo@gmail.com](mailto:reis.ivo@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
