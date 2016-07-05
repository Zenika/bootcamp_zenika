'use strict';

angular.module('simpleApp', [])
    .controller('NameController', function ($scope, $http) {

        $scope.contacts = [];

        $scope.newname = "";

        $scope.getContactList = function() {
            var req = "http://localhost:8080/list";
            $http.get(req)
                .then(function (response) {
                    $scope.contacts = response.data;
                });
        };

        $scope.addContact = function () {
            var req = "http://localhost:8080/add?name=" + $scope.newname;
            $scope.newname = '';

            $http.get(req)
                .then(function (response) {
                    $scope.contacts = response.data;
                });

            /*
            //Native HTML5 request
            var xhr = new XMLHttpRequest();
            xhr.open('GET', req, true);

            xhr.onload = function(e) {
                if (this.status == 200) {
                    $scope.contacts = JSON.parse(this.response);
                    $scope.$apply();
                }
            };

            xhr.send();*/
        }

    });
