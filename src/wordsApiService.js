var wordsApiService = {};
var API_BASE_URL = 'https://api.datamuse.com/';

wordsApiService.getSuggestions = function(word) {
    return fetch(`${API_BASE_URL}/words?ml=`+ word)
        .then(response => response.json())
}

wordsApiService.getAntonyms = function(word) {
    return fetch(`${API_BASE_URL}/word?rel_ant=`+ word)
        .then(response => response.json())
}

export default wordsApiService;