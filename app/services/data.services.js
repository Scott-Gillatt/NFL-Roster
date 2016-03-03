/* global app */

app.factory('DataService', function ($http, $q) {
    var players = [];
    var service = {
        loadPlayers: function () {
            var deferred = $q.defer();
          $http.get("http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson")
                .success(function (data) {

                    var len = data.body.players.length
                    for (var i = 0; i < len; i++) {
                        if (data.body.players[i].pro_status !== null) {
                            players.push(data.body.players[i]);
                        }
                    }
                    deferred.resolve(players.data)
                });
                    return deferred.promise
        },
        getAllPlayers: function () {
            return players
        },
        getPlayersByTeam: function () {
        },
        getPlayersByPosition: function (position) {

        },
    }
    return service;
});