var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state('main', {
        url: "/main",
        templateUrl: "main.html"
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

app.controller("myCtrl", function ($scope, $location) {
    $scope.beerSearch = "";
    $scope.beers = [{
        "name": "mirrorpond",
        "keywords": "Deschutes Mirror Pond Pale Ale",
        "brewery": "Deschutes",
        "image": "../images/deschutes_mirrorpond.png",
        "description": "BEST PALE ALE"
    },
    {
        "name": "chainbreaker",
        "keywords": "Deschutes Chainbreaker White IPA",
        "brewery": "Deschutes",
        "image": "../images/deschutes_chainbreaker.png",
        "description": "BEST WHITE IPA"
    },
    {
        "keywords": "Pabst Blue Ribbon",
        "brewery": "Pabst",
        "image": "../images/pabst_pbr.jpg",
        "description": "BEST CHEAP BEER"
    },
    {
        "keywords": "Pabst Rainier Beer PBR",
        "brewery": "Pabst",
        "image": "../images/pabst_rainier.jpg",
        "description": "BEST CHEAP BEER IN THE PNW"
    },
    {
        "keywords": "Rogue Dead Guy Ale",
        "brewery": "Rogue",
        "image": "../images/rogue_deadguy.jpg",
        "description": "BEST BOCK ON THE BLOCK"
    },
    {
        "keywords": "Rogue Hazelnut Brown Nectar",
        "brewery": "Rogue",
        "image": "../images/rogue_hazelnut.jpg",
        "description": "BEST BROWN ALE"
    },
    {
        "keywords": "Sly Fox Helles Golden Lager",
        "brewery": "Sly Fox",
        "image": "../images/slyfox_helles.png",
        "description": "BEST LAGER"
    }];
    $scope.descriptions = {
        "main": {
            "title": "Click on a brewery to see a list of its beers\nor type in the name of a beer in the search bar."
        },
        "deschutes": {
            "title": "Deschutes Brewery",
            "subtitle": "Bend, Oregon",
            "description": "Deschutes Brewery was founded in 1988 as a brew pub. In 2008, it opened a second brew pub in Portland's Pearl District. Deschutes is one of the largest craft breweries in the U.S., producing 250,000 barrels a year."
        },
        "pabst": {
            "title": "Pabst Brewing Co.",
            "subtitle": "Los Angeles, California",
            "description": "Pabst was founded in 1844 by Jacob Best. Originally founded in Milwaukee, Wisconsin, Pabst has grown into a holding company with over two dozen portfolio brands."
        },
        "rogue": {
            "title": "Rogue Ales",
            "subtitle": "Newport, Oregon",
            "description": "Rogue Ales was founded in 1988 in Ashland, Oregon. Operating brew pubs in Oregon, Washington, and California, Rogue has expanded into distilling as well."
        },
        "slyfox": {
            "title": "Sly Fox Brewery",
            "subtitle": "Phoenixville, Pennsylvania",
            "description": "Sly Fox was founded in 1995 by the Giannopoulos family, who hunted foxes in the Chester County area."
        },
        "chainbreaker": {
            "title": "Chainbreaker",
            "subtitle": "White IPA",
            "description": "Chainbreaker White IPA is the best white IPA."
        }
    };
    $scope.displaySearch = function(text) {
        if (text.length) {
            //display search view
            return $location.path("/search");
        }
        //display default
        return $location.path("/main");
    };
    $scope.lastClick = "";
});
