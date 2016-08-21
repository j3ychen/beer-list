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
        })
        .state('starrhill', {
            url: "/starrhill",
            templateUrl: "starrhill.html"
        });
});

app.controller("myCtrl", function ($scope, $location) {
    $scope.beerSearch = "";
    $scope.beers = [{
        "name": "mirrorpond",
        "keywords": "Deschutes Mirror Pond Pale Ale",
        "brewery": "Deschutes",
        "image": "../images/deschutes_mirrorpond.png"
    },
    {
        "name": "chainbreaker",
        "keywords": "Deschutes Chainbreaker White IPA",
        "brewery": "Deschutes",
        "image": "../images/deschutes_chainbreaker.png"
    },
    {
        "keywords": "Pabst Blue Ribbon PBR",
        "brewery": "Pabst",
        "image": "../images/pabst_pbr.jpg"
    },
    {
        "keywords": "Pabst Rainier Beer",
        "brewery": "Pabst",
        "image": "../images/pabst_rainier.jpg"
    },
    {
        "keywords": "Rogue Dead Guy Ale",
        "brewery": "Rogue",
        "image": "../images/rogue_deadguy.jpg"
    },
    {
        "keywords": "Rogue Hazelnut Brown Nectar",
        "brewery": "Rogue",
        "image": "../images/rogue_hazelnut.jpg"
    },
    {
        "keywords": "Sly Fox Helles Golden Lager",
        "brewery": "Sly Fox",
        "image": "../images/slyfox_helles.png"
    },
    {
        "keywords": "Starr Hill The Love",
        "brewery": "Starr Hill",
        "image": "../images/starrhill_love.jpg"
    }];
    $scope.descriptions = {
        "main": {
            "title": "Click on a brewery or search for a beer."
        },
        "deschutes": {
            "title": "Deschutes Brewery",
            "subtitle": "Bend, Oregon",
            "description": "Deschutes was founded in 1988 as a brew pub. I first had it in Bend on my way to Seattle in March 2015."
        },
        "pabst": {
            "title": "Pabst Brewing Co.",
            "subtitle": "Los Angeles, California",
            "description": "Pabst was founded in 1844 by Jacob Best. Originally founded in Milwaukee, Wisconsin, Pabst has grown into a holding company with over two dozen portfolio brands. Among my favorites are Rainier (best cheap beer in the PNW) and PBR (best cheap beer everywhere else)."
        },
        "rogue": {
            "title": "Rogue Ales",
            "subtitle": "Newport, Oregon",
            "description": "Rogue Ales was founded in 1988 in Ashland, Oregon. I enjoyed its Dead Guy Ale while still on the East Coast. Its brew pub is a must-go destination every time I go to Portland. #GoRogue"
        },
        "slyfox": {
            "title": "Sly Fox Brewery",
            "subtitle": "Phoenixville, Pennsylvania",
            "description": "Sly Fox was founded in 1995 by the Giannopoulos family, who hunted foxes in the Chester County area. I bought my first-ever 64-ounce growler here and have refilled it with the Helles Golden Lager many times."
        },
        "starrhill": {
            "title": "Starr Hill Brewery",
            "subtitle": "Crozet, Virginia",
            "description": "Starr Hill was founded in Charlottesville in 1999. The Love is what drove me to craft beer back in my college days. The kids in the Ville love to say ignorant things like, \"It's not even that great.\" Don't listen to them; it's great."
        }
    };
    $scope.displaySearch = function(text) {
        $scope.lastClick = "main";
        return $location.path("/main");
    };
    $scope.lastClick = "main";
});
