StarlingCloudInterface.controller('SideNavController', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.menuItems = [
        {name: 'Navigation', icon: 'fa-sitemap'},
        {name: 'Users', icon: 'fa-users'},
        {name: 'Styling', icon: 'fa-magic'},
        {name: 'Settings', icon: 'fa-cogs'}
    ];
  }]);