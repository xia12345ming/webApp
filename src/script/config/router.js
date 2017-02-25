/**
 * Created by xiam on 2017/2/24.
 */
'use strict';
angular.module('app').config(['$staterProvider','$urlRouterProvider',function($staterProvider,$urlRouterProvider){
    $staterProvider.sate('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    });
    $urlRouterProvider.otherwise('main');
}])