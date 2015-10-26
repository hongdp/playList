var app = angular.module('YahooPlayList', []);

app.controller('PlayListCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
        $scope.artistsList = ["Elton John", "Stevie Wonder", "Frank Sinatra", "Louis Armstrong"];
        $scope.artistName = $scope.artistsList[0];
        $scope.artistChange = function () {
            $http.get("playlist/getlist?artist="+$scope.artistName).success(function(data){
                $scope.videoList = data.items;
                $scope.playerSrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+data.items[0].id.videoId+"?autoplay=0");
            });
        };
        $scope.playVideo = function (id) {
            $scope.playerSrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/"+id+"?autoplay=1");
        };
        $scope.artistChange();
    }]
);