import fetch from 'isomorphic-fetch';

export function doLogin (loginState) {
    console.log ('service: ' + JSON.stringify(loginState));
    return fetch (
      'http://localhost:8080/login/auth', {
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(loginState)
      }
    )
    .then((response) => {
        const json = response.json();
        console.log(json);
        return json;
    })
    .then((json) => json);
}
