app.factory('DataService', function ($http) {
    var players = [];
    var teams = [];
    var service = {
        loadPlayers: function () {
            $http.get("http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson")
                .success(function (data) {
                    var len = data.body.players.length
                    for (var i = 0; i < len; i++) {
                        if (data.body.players[i].pro_status !== null) {
                            players.push(data.body.players[i]);
                        }
                    }
                    // this.loadTeams();
                });
        },
        getAllPlayers: function () {
            return players;
        },
        getPlayersByTeam: function () {
        },
        getPlayersByPosition: function (position) {

        },
        
        // loadTeams: function () {
        //     for (var i = 0; i < players.length; i++) {
        //         if (players[i].pro_team === team) {
        //             teams.push(team[i])
        //         }
        //     }    
        // }
    }
    return service;
});