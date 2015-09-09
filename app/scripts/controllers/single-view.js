StarlingCloudInterface.controller('SingleViewController', ['$scope', '$sce', '$stateParams', '$firebase',
  function ($scope, $sce, $stateParams, $firebase) {
    //set doc title
    window.document.title = 'Edit view';
    //firebase
    var currentAppKey = $stateParams.appId;
    var currentViewKey = $stateParams.viewId;
    $scope.theViewID = currentViewKey;
    
    var currentView = new Firebase("https://starling.firebaseio.com/apps/" + currentAppKey + "/views/" + currentViewKey );
    $scope.view = $firebase(currentView);

    $scope.updateViewTitle = function() {
        $scope.view.$update({title: $scope.view.title});
    };
    $scope.$watch('view.content', function() {
      $scope.view.$update({content: $scope.view.content});
    });

}]);