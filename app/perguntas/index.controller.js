(function () {
    'use strict';

    angular
        .module('app')
        .controller('Perguntas.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = {};
        vm.savePergunta = savePergunta;
        vm.excluiPergunta = excluiPergunta;
        vm.perguntas = []

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });

            UserService.GetPerguntas().then(function (perguntas) {
                vm.perguntas = perguntas;
            });
        }

        
        function savePergunta() {
            console.log('savePerguntaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!');            
            console.log(vm.novaPergunta);
            var tableRef = document.getElementById('perguntas').getElementsByTagName('tbody')[0];

            var newRow   = tableRef.insertRow();
            var newCell  = newRow.insertCell(0);
            var newText  = document.createTextNode(vm.novaPergunta);
            newCell.appendChild(newText);

            if(vm.novaPergunta != null || vm.novaPergunta != '') {  
                var question = { key: vm.novaPergunta.length ,value: vm.novaPergunta }     
               
                UserService.saveQuestion(question)
                .then(function () {
                    FlashService.Success('Pergunta criada');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });

                vm.novaPergunta = null
            }
        }
        function excluiPergunta(_id) {
            var questionExcluded = { key: _id }   
            console.log('EXCLUIRRRRRRRR!!!!!!!!!!!!: ' + _id);  
            UserService.excluiPergunta(questionExcluded)
                .then(function () {
                    FlashService.Success('Pergunta Excluída com sucesso');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });          
        }
    }

})();