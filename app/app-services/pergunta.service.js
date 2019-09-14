(function () {
    'use strict';

    angular
        .module('app')
        .factory('PerguntaService', Service);

    function Service($http, $q) {
        var service = {};
        service.saveQuestion = saveQuestion;

        return service;
        
        function saveQuestion(pergunta) {
            console.log("saveQuestion2222: " + pergunta);
            //return $http.post('http://localhost:9050/api/pergunta/saveQuestion', pergunta).then(handleSuccess, handleError);
             return $http.post('/api/pergunta/saveQuestion', pergunta).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
