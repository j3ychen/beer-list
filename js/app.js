var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state('main', {
        url: "/main",
        templateUrl: "main.html"
        })
        .state('search', {
            url: "/search",
            templateUrl: "search.html"
        })
        .state('deschutes', {
            url: "/deschutes",
            templateUrl: "deschutes.html"
        })
        .state('pabst', {
            url: "/pabst",
            templateUrl: "pabst.html"
        })
        .state('rogue', {
            url: "/rogue",
            templateUrl: "rogue.html"
        })
        .state('slyfox', {
            url: "/slyfox",
            templateUrl: "slyfox.html"
        });
});

app.controller("myCtrl", function ($scope) {
    $scope.beerSearch = "";
    $scope.beers = [{
        "name": "Deschutes Mirror Pond Pale Ale",
        "brewery": "Deschutes",
        "image": "../images/deschutes_mirrorpond.png",
        "description": "BEST PALE ALE"
    },
    {
        "name": "Deschutes Chainbreaker White IPA",
        "brewery": "Deschutes",
        "image": "../images/deschutes_chainbreaker.png",
        "description": "BEST WHITE IPA"
    },
    {
        "name": "Pabst Blue Ribbon",
        "brewery": "Pabst",
        "image": "../images/pabst_pbr.jpg",
        "description": "BEST CHEAP BEER"
    },
    {
        "name": "Pabst Rainier Beer PBR",
        "brewery": "Pabst",
        "image": "../images/pabst_rainier.jpg",
        "description": "BEST CHEAP BEER IN THE PNW"
    },
    {
        "name": "Rogue Dead Guy Ale",
        "brewery": "Rogue",
        "image": "../images/rogue_deadguy.jpg",
        "description": "BEST BOCK ON THE BLOCK"
    },
    {
        "name": "Rogue Hazelnut Brown Nectar",
        "brewery": "Rogue",
        "image": "../images/rogue_hazelnut.jpg",
        "description": "BEST BROWN ALE"
    },
    {
        "name": "Sly Fox Helles Golden Lager",
        "brewery": "Sly Fox",
        "image": "../images/slyfox_helles.png",
        "description": "BEST LAGER"
    }];
    $scope.displaySearch = function(text) {
        if (text.length) {
            //display search view
            return $location.path("/search");
        }
        //display default
        return $location.path("/main");
    };
    $scope.description = "";
});
