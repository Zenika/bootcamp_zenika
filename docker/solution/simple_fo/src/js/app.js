'use strict';

angular.module('simpleApp', [])
    .controller('NameController', function ($scope, $http) {

        $scope.contacts = [];

        $scope.newname = "";

        var bo_path = document.location.hostname;
        if (document.location.hostname.match(/.*\.play-with-docker\.com/)) {
            bo_path = bo_path.replace(/-\d+\./, '-8080.');
        } else {
            bo_path += ':8080';
        }

        $scope.getContactList = function() {
            var req = "http://" + bo_path + "/list";
            $http.get(req)
                .then(function (response) {
                    $scope.contacts = response.data;
                });
        };

        $scope.addContact = function () {
            var req = "http://" + bo_path + "/add?name=" + $scope.newname;
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
