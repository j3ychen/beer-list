var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/deschutes", {
        templateUrl : "deschutes.html",
        controller: "myCtrl"
    })
    .when("/pabst", {
        templateUrl : "pabst.html",
        controller: "myCtrl"
    })
    .when("/rogue", {
        templateUrl : "rogue.html",
        controller: "myCtrl"
    })
    .when("/slyfox", {
        templateUrl : "slyfox.html",
        controller: "myCtrl"
    });
});

app.controller("myCtrl", function ($scope) {
    $scope.beerSearch = "";
    $scope.beers = [{
        "name": "Mirror Pond Pale Ale",
        "brewery": "Deschutes",
        "image": "../images/deschutes_mirrorpond.png",
        "description": "BEST PALE ALE"
    },
    {
        "name": "Chainbreaker White IPA",
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
        "name": "Rainier Beer",
        "brewery": "Pabst",
        "image": "../images/pabst_rainier.jpg",
        "description": "BEST CHEAP BEER IN THE PNW"
    },
    {
        "name": "Dead Guy Ale",
        "brewery": "Rogue",
        "image": "../images/rogue_deadguy.jpg",
        "description": "BEST BOCK ON THE BLOCK"
    },
    {
        "name": "Hazelnut Brown Nectar",
        "brewery": "Rogue",
        "image": "../images/rogue_hazelnut.jpg",
        "description": "BEST BROWN ALE"
    },
    {
        "name": "Helles Golden Lager",
        "brewery": "Sly Fox",
        "image": "../images/slyfox_helles.png",
        "description": "BEST LAGER"
    }];
});
