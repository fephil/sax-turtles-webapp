var apiServiceApi = {};
var API_BASE_URL = 'http://sax-turtles-api.azurewebsites.net'

apiServiceApi.makeStartGameRequest = function() {
    return fetch(`${API_BASE_URL}/start`)
        .then(response => response.json())
}

apiServiceApi.updateGameData = function(payload) {
    return fetch(`${API_BASE_URL}/update`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
    })
}

export default apiServiceApi;