angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Reggae', id: 7 },
    { title: 'Chill', id: 8 },
    { title: 'Dubstep', id: 9 },
    { title: 'Indie', id: 10 },
    { title: 'Rap', id: 11 },
    { title: 'Cowbell', id: 12 },
    { title: 'Reggae', id: 13 },
    { title: 'Chill', id: 14 },
    { title: 'Dubstep', id: 15 },
    { title: 'Indie', id: 16 },
    { title: 'Rap', id: 17 },
    { title: 'Cowbell', id: 18 },
    { title: 'Reggae', id: 19 },
    { title: 'Chill', id: 20 },
    { title: 'Dubstep', id: 21 },
    { title: 'Indie', id: 22 },
    { title: 'Rap', id: 23 },
    { title: 'Cowbell', id: 24 },
    { title: 'Reggae', id: 25 },
    { title: 'Chill', id: 26 },
    { title: 'Dubstep', id: 27 },
    { title: 'Indie', id: 28 },
    { title: 'Rap', id: 29 },
    { title: 'Cowbell', id: 30 },
    { title: 'Reggae', id: 31 },
    { title: 'Chill', id: 32 },
    { title: 'Dubstep', id: 33 },
    { title: 'Indie', id: 34 },
    { title: 'Rap', id: 35 },
    { title: 'Cowbell', id: 36 },
    { title: 'Reggae', id: 37 },
    { title: 'Chill', id: 38 },
    { title: 'Dubstep', id: 39 },
    { title: 'Indie', id: 40 },
    { title: 'Rap', id: 41 },
    { title: 'Cowbell', id: 42 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
