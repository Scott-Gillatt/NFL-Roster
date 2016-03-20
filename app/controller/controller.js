/* global angular */
app.controller('RosterController', function ($scope, DataService, $filter) {
    $scope.players = [];
    $scope.roster = [];
    $scope.myFilter = {};
    $scope.NFLFilter = {};
    $scope.playerLimit = 50;
    // AFC
    $scope.AFCEast = [{ long: "Buffalo Bills", short: "BUF" }, { long: "Miami Dolphins", short: "MIA" }, { long: "New England Patriots", short: "NE" }, { long: "New York Jets", short: "NYJ" }];
    $scope.AFCNorth = [{ long: "Baltimore Ravens", short: "BAL" }, { long: "Cincinnati Bengals", short: "CIN" }, { long: "Cleveland Browns", short: "CLE" }, { long: "Pittsburgh Steelers", short: "PIT" }];
    $scope.AFCSouth = [{ long: "Houston Texans", short: "HOU" }, { long: "Indianapolis Colts", short: "IND" }, { long: "Jacksonville Jaguars", short: "JAX" }, { long: "Tennessee Titans", short: "TEN" }];
    $scope.AFCWest = [{ long: "Denver Broncos", short: "DEN" }, { long: "Kansas City Chiefs", short: "KC" }, { long: "Oakland Raiders", short: "OAK" }, { long: "San Diego Chargers", short: "SD" }];
    
    // NFC
    $scope.NFCEast = [{ long: "Dallas Cowboys", short: "DAL" }, { long: "New York Giants", short: "NYG" }, { long: "Philadelphia Eagles", short: "PHI" }, { long: "Washington Redskins", short: "WAS" }];
    $scope.NFCNorth = [{ long: "Chicago Bears", short: "CHI" }, { long: "Detroit Lions", short: "DET" }, { long: "Green Bay Packers", short: "GB" }, { long: "Minnesota Vikings", short: "MIN" }];
    $scope.NFCSouth = [{ long: "Atlanta Falcons", short: "ARI" }, { long: "Carolina Panthers", short: "CAR" }, { long: "New Orleans Saints", short: "NO" }, { long: "Tampa Bay Buccaneers", short: "TB" }];
    $scope.NFCWest = [{ long: "Arizona Cardinals", short: "ARI" }, { long: "St. Louis Rams", short: "STL" }, { long: "San Francisco 49ers", short: "SF" }, { long: "Seattle Seahawks", short: "SEA" }];

    $scope.NFLPositions = ["QB", "RB", "WR", "TE", "K", "LB", "DB", "DL"]

    $scope.setPlayerLimit = function (limit) {
        $scope.playerLimit = limit;
        $scope.count = "";
        
    }

    $scope.loadPlayers = function () {
        $scope.showSpinner = true
        $scope.playersloaded = false
        DataService.loadPlayers()
            .then(function (data) {
                $scope.showSpinner = false
                $scope.playersloaded = true
            })
    },

    $scope.setPlayers = function () {
        $scope.players = DataService.getAllPlayers();
    }

    $scope.addPlayers = function () {

        $scope.roster.push(
            {
                fullname: $scope.newplayer.fullname,
                jersey: $scope.newplayer.jersey,
                position: $scope.newplayer.position,
                pro_team: $scope.newplayer.pro_team
            })
        $scope.resetPlayer();
    }
    
    $scope.resetPlayer = function () {
        $scope.newplayer = "";
    }

    $scope.resetPlayer = function () {
        $scope.newplayer = "";
    }

    $scope.addToRoster = function (player) {
        $scope.roster.push(player)
        $scope.players.splice($scope.players.indexOf(player), 1);
    }

    $scope.removeFromRoster = function (player) {
        $scope.players.push(player)
        $scope.roster.splice($scope.roster.indexOf(player), 1);
    }

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");

    });

});