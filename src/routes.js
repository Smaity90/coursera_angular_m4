
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider

    .state('home',{
        url:'/home',
        templateUrl:'src/home/template/home.template.html'
    })

    .state('categories',{
        url:'/categories',
        templateUrl:'src/category/template/category.template.html',
        resolve:{
            categories:['MenuDataService',function MenuDataService(MenuDataService){
                return MenuDataService.getAllCategories();
            }]

        },
        controller:'CategoryController as categoryCtrl'
    })

    .state('categories.itemDetails',{
        url:'/item-details/{itemShortName}/{menuIndex}',
        templateUrl:'src/category/template/item-details.template.html',
        resolve:{
            item:['$stateParams','MenuDataService',function MenuDataService($stateParams,MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.itemShortName);
            }]
        },
        controller:'ItemDetailsCOntroller as ItemDetailsCtrl'
    })
}
})();