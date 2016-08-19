var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/deschutes", {
        templateUrl : "deschutes.html"
    })
    .when("/pabst", {
        templateUrl : "pabst.html",
        controller: "pabstCtrl"
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
});

// deschutes
app.controller("deschutesCtrl", function ($scope) {
    $scope.beers = [{
        "name": "Mirror Pond Pale Ale",
        "image": "../images/deschutes_mirrorpond.png",
        "description": "BEST PALE ALE"
    },
    {
        "name": "Chainbreaker White IPA",
        "image": "../images/deschutes_chainbreaker.png",
        "description": "BEST WHITE IPA"
    }];
});

// pabst
app.controller("pabstCtrl", function ($scope) {
    $scope.beers = [{
        "name": "Pabst Blue Ribbon",
        "image": "../images/pabst_pbr.jpg",
        "description": "BEST CHEAP BEER"
    },
    {
        "name": "Rainier Beer",
        "image": "../images/pabst_rainier.jpg",
        "description": "BEST CHEAP BEER IN THE PNW"
    }];
});
