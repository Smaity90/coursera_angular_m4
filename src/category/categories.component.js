(function () {
'use strict';
angular.module('data')
.component('categories',{
    templateUrl:'src/category/template/category-list.template.html',
    bindings:{
        list:'<'
    }
})

})();