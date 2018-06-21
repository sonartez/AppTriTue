angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ISNhNg', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/ISNhNg.html',
        controller: 'ISNhNgCtrl'
      }
    }
  })

  .state('tabsController.giangH', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/giangH.html',
        controller: 'giangHCtrl'
      }
    }
  })

  .state('tabsController.xemVKhC', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/xemVKhC.html',
        controller: 'xemVKhCCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.BCThY', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/BCThY.html',
        controller: 'BCThYCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});