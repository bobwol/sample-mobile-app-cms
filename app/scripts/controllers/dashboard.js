StarlingCloudInterface.controller('DashboardController', ['$scope', '$location', '$firebase',
  function ($scope, $location, $firebase) {
    //set doc title
    window.document.title = 'Dashboard';
    //firebase
    var apps = new Firebase("https://starling.firebaseio.com/apps");
    $scope.apps = $firebase(apps);

    $scope.createNewApp = function(authorKey) {
        $scope.apps.$add({
            title: 'Untitled',
            author: authorKey
        });
    };
  }]);