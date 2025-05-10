class PostPage {
  constructor(request) {
    this.request = request;
    this.url = 'https://www.lamoda.by/api/v1/banner/get';
    this.urlSentry = 'https://sentry-js.lamoda.ru/api/2/envelope/?sentry_key=8ddb7c59cddd4becb87a4b92279a26ab&sentry_version=7'
  }

  async sendPost() {
    return this.request.post(this.url,{
      headers: {
        'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
      'content-type': 'application/json',
      'cookie': 'lid=CgXkIWgYhQR3XHdiDSxiAgA=; lmda_adBlocker=0; lmda_site_version=2025.04.28; gd_city=%D0%B3.%20%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA; gd_aoid=11928; gd_aoid_reg=3; seenFirstCoupon=true; noPhone=true; authType=email; LMDA=gd_lat=55.19301970604601:gd_long=30.20704367256399:aoid=11928; XCookieNotifyWasShown=true; tildauid=1746687245030.349952; sv=dsk; XCookiePolicyAcception=true; search_gender=; srv_menu_gender=children; sid=NDQ3YTdiMTU4NjBlMWY0ZWE1ZmJlM2ZmMDI3Y2Y2ZDY=|1746887340|23dcb202456bd242da9455a91a91b2fe2aa09588',
      'origin': 'https://www.lamoda.by',
      'referer': 'https://www.lamoda.by/c/5378/default-malchikam/?genders=boys&sitelink=topmenuK&l=4',
      'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0',
      'x-lm-city-aoid': '11928',
      'x-lm-region-aoid': '3',
      },
      data: {},
        
    });
  }
  async sendPostSentry() {
    return this.request.post(this.urlSentry);
  }

}

module.exports = { PostPage };