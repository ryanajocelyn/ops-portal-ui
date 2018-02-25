import fetch from 'isomorphic-fetch';

export function fetchAssociates (loginState) {
    console.log ('service: ' + JSON.stringify(loginState));
    return fetch (
      'http://localhost:8080/associate/all', {
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          method: 'GET',
          credentials: 'include'
      }
    )
    .then((response) => {
        const json = response.json();
        console.log(json);
        return json;
    })
    .then((json) => json);
}
