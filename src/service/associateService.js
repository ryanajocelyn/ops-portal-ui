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

export function fetchClarityFgDeviations (loginState) {
    console.log ('service: ' + JSON.stringify(loginState));
    return fetch (
      'http://localhost:8080/report/esaVsFg', {
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

export function fetchAllAccounts (loginState) {
    return fetch (
      'http://localhost:8080/accounts/all', {
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

export function fetchHolidays (loginState) {
    return fetch (
      'http://localhost:8080/holidays/all', {
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


export function insertHoliday (holiday) {
    return fetch (
      'http://localhost:8080/save/holiday', {
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          method: 'POST',
          credentials: 'include',
          body: holiday
      }
    )
    .then((response) => {
        const json = response.json();
        console.log(json);
        return json;
    })
    .then((json) => json);
}

export function fetchUBRDetails (month) {
    return fetch (
      `http://localhost:8080/report/ubr/${month}`, {
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
