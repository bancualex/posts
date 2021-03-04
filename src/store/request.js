export const makeRequest = (url) => {
    return fetch(url, {
        method: "GET", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Accept': 'application/json',
          'X-Auth': 'bWFydGlhbmFuZG1hY2hpbmU=',
        },
      })
}