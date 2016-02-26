/* global angular */
app.controller('RosterController', function ($scope, DataService, $filter) {
    $scope.players = [];
    $scope.roster = [];

    $scope.loadPlayers = function () {
        DataService.loadPlayers();
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
    
    $scope.addToRoster = function (player) {
        $scope.roster.push(player)
        $scope.players.splice($scope.players.indexOf(player), 1);
    }

    $scope.resetPlayer = function () {
        $scope.newplayer = "";
    }

    $scope.removeFromRoster = function (player) {
        $scope.players.push(player)
        $scope.roster.splice($scope.roster.indexOf(player), 1);
    }
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
    });

});