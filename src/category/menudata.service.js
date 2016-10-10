(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];
function MenuDataService($http){
   
    var service=this;

    service.getAllCategories=function(){
            //console.log("MenuDataService:getAllCategories");
            var promise=$http({
                 url:"https://davids-restaurant.herokuapp.com/categories.json",
                 method:"GET"   
            });
           
           return promise;
    }

    service.getItemsForCategory=function(categoryShortName){
        return $http({
            url:"https://davids-restaurant.herokuapp.com/menu_items.json",
            method:"GET",
            params:{'category':categoryShortName}
        });
    }
}

})();