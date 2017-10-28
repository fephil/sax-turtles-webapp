var apiServiceApi = {};
var API_BASE_URL = 'http://sax-turtles-api.azurewebsites.net'

apiServiceApi.makeStartGameRequest = function() {
    return fetch(`${API_BASE_URL}/start`)
        .then(response => response.json())
}

export default apiServiceApi;