"use strict";
angular.module("app",["ui.router"]);
/**
 * Created by xiam on 2017/2/24.
 */
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html'
    });
    $urlRouterProvider.otherwise('main');
}])