var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/search", {
        templateUrl : "search.html"
    })
    .when("/deschutes", {
        templateUrl : "deschutes.html"
    })
    .when("/pabst", {
        templateUrl : "pabst.html"
    })
    .when("/rogue", {
        templateUrl : "rogue.html"
    })
    .when("/slyfox", {
        templateUrl : "slyfox.html"
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
});
