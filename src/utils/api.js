class Api {
    constructor (options) {
        this._options = options;
    }

    _request(way, method) {
        this._options.method = method;
        return fetch(way, this._options)
          .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }

    getInitialCards() {
        return this._request('https://mesto.nomoreparties.co/v1/cohort-38/cards', 'GET');
    }

    addCard(data) {
        this._options.body = JSON.stringify({
            name: data.place,
            link: data.link
        });
        return this._request('https://mesto.nomoreparties.co/v1/cohort-38/cards', 'POST');
    }

    deleteCard(cardId) {
        return this._request(`https://mesto.nomoreparties.co/v1/cohort-38/cards/${cardId}`, 'DELETE');
    }

    getUserData() {
        return this._request('https://mesto.nomoreparties.co/v1/cohort-38/users/me', 'GET');
    }

    updateProfile(data, avatar) {
        if (!avatar) {
            this._options.body = JSON.stringify({
                name: data.name,
                about: data.description
            })
            return this._request('https://mesto.nomoreparties.co/v1/cohort-38/users/me', 'PATCH');
        }
        else {
            this._options.body = JSON.stringify(data);
            return this._request('https://mesto.nomoreparties.co/v1/cohort-38/users/me/avatar', 'PATCH');
        }
    }

    toggleLike(cardId, action) {
        return this._request(`https://mesto.nomoreparties.co/v1/cohort-38/cards/${cardId}/likes`, action); 
    }

    getAppInfo() {
        return Promise.all([this.getInitialCards(), this.getUserData()]);
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
    headers: {
      authorization: 'c25d5e93-56a4-4d00-9904-66eef2ea3711',
      'Content-Type': 'application/json'
    }
});

export default api;