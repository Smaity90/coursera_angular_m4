(function () {
'use strict';
angular.module('data')
.controller('CategoryController',CategoryController);

CategoryController.$inject=['categories']
function CategoryController(categories){
    var categoryCtrl=this;
    categoryCtrl.categoryList=categories.data;
}
})();
