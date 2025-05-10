class GetPage {
  constructor(request) {
    this.request = request;
  }

  async getPageUrl(url) {
    return this.request.get(url);
  }
}

module.exports = { GetPage };