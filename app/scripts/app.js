var StarlingCloudInterface = angular.module('StarlingCloudInterface', [
    'ngSanitize',
    'ui.router',
    'ui.sortable',
    'ngDragDrop',
    'ngAnimate',
    'firebase',
    'angular-medium-editor',
    //'angularfire',
    //'angularfire.login',
    ]);

StarlingCloudInterface.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'sideNav': { 
            templateUrl: 'partials/sidenav-dashboard.html', 
            controller: 'SideNavController'
          },
          '': { 
            templateUrl: 'views/dashboard.html', 
            controller: 'DashboardController'
          },
          'headerBar': { 
            template: 'Dashboard', 
            controller: 'HeaderBarController'
          }
        }
      })
      .state('edit', {
        url: '/edit/:appId',
        views: {
          'sideNav': { 
            templateUrl: 'partials/sidenav-editor.html', 
            controller: 'SideNavController'
          },
          '': { 
            templateUrl: 'views/editor.html', 
            controller: 'EditorController'
          },
          'headerBar': { 
            template: 'Starling demo app', 
            controller: 'HeaderBarController'
          }
        }
      })
      .state('edit.views', {
        url: '/views',
        views: {
          'drawerView': { 
            templateUrl: 'partials/editor-views.html', 
            controller: 'EditorController'
          },
          'canvasView': { 
            templateUrl: 'partials/editor-phone.html', 
            controller: 'EditorController'
          }
        }
      })
      .state('edit.view', {
        url: '/view/:viewId',
        views: {
          'drawerView': { 
            templateUrl: 'partials/editor-viewdetail.html', 
            controller: 'SingleViewController'
          },
          'canvasView': { 
            templateUrl: 'partials/editor-phone.html', 
            controller: 'SingleViewController'
          }
        }
      })
      .state('edit.component', {
        url: '/view/:viewId/component/:componentId',
        views: {
          'drawerView': { 
            templateUrl: 'partials/editor-componentdetail.html', 
            controller: 'SingleViewController'
          },
          'canvasView': { 
            templateUrl: 'partials/editor-phone.html', 
            controller: 'SingleViewController'
          }
        }
      });
  }]);

/*services*/
StarlingCloudInterface.factory('view', function() {
   var title = 'Starling';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle }
   };
});

StarlingCloudInterface.config(function($provide) {
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
});