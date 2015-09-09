StarlingCloudInterface.controller('EditorController', ['$scope', '$state', '$stateParams', '$firebase',
  function ($scope, $state, $stateParams, $firebase) {
    //set doc title
    window.document.title = 'Hello Starling';
    //firebase
    var currentAppKey = $stateParams.appId;
    var currentApp = new Firebase("https://starling.firebaseio.com/apps/" + currentAppKey);
    $scope.currentApp = $firebase(currentApp);
    var currentAppViews = new Firebase("https://starling.firebaseio.com/apps/" + currentAppKey + "/views");
    $scope.currentAppViews = $firebase(currentAppViews);
    var currentViewKey = $stateParams.viewId;
    var currentView = new Firebase("https://starling.firebaseio.com/apps/" + currentAppKey + "/views/" + currentViewKey);
    $scope.currentView = $firebase(currentView);
    currentViewData = new Firebase("https://starling.firebaseio.com/apps/" + currentAppKey + "/views/" + currentViewKey + "/viewData");
    $scope.viewData = $firebase(currentViewData);
    $scope.createAppView = function(appKey) {
        $scope.currentAppViews.$add({
            title: 'Add a title',
            type: 'text',
            icon: 'fa-pencil-square',
            content: 'Add your content here...',
        });
    };
    
    $scope.deleteAppView = function(viewKey) {
        $scope.currentAppViews.$remove(viewKey);
    };

    $scope.setViewType = function() {
        $scope.currentView.$set({title: 'Untitled', type: 'text', icon: 'fa-pencil-square', content: 'Hello'});
    };

    if ($scope.currentView.type == 'notSet') {
      $scope.undefinedView = true;
    } else {
      $scope.undefinedView = false;
    };

    if ($state.current.name == 'edit.views') {
      $scope.noview = true;
    } else if ($state.current.name == 'edit.view') {
      $scope.noview = false;
    } else {
      $scope.noview = false;
    };

  }]);