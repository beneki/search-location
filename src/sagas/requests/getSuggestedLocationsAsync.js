import "whatwg-fetch";

export default class getSuggestedLocationsAsync {
  *getSuggestedLocations(searchStr) {
    try {
      const response = yield fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchStr}`
      );

      const resp = yield response.json();
      console.log(resp);
      return resp;
      // return {}
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
}
