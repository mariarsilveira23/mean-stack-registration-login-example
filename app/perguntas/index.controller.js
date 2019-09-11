(function () {
    'use strict';

    angular
        .module('app')
        .controller('Perguntas.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = {};
        vm.savePergunta = savePergunta;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        
        function savePergunta() {
            console.log('savePerguntaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!');            
            console.log(vm.novaPergunta);

            UserService.saveQuestion(vm.novaPergunta)
                .then(function () {
                    FlashService.Success('Pergunta criada');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();