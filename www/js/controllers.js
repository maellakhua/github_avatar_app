angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

angular.module('github.controllers', [])

.controller('GitHubController', function($scope,$http) {
    
     $scope.onchange = function(){
         
         $http({method: 'GET', url: 'https://api.github.com/users/'+$scope.username+'?access_token=e1c73e40b21f13c5aaa6a0a91d50892835ff17d8'}).
            success(function(data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available
              $scope.avatar_url = data.avatar_url;
              $scope.show_image = true;
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              $scope.show_image = false;
            });
         
         
     }
    
});