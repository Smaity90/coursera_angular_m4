(function () {
'use strict';
angular.module('data')
.controller('ItemDetailsCOntroller',ItemDetailsCOntroller);

ItemDetailsCOntroller.$inject=['item','categories','$stateParams']
function ItemDetailsCOntroller(item,categories,$stateParams){
    var ItemDetailsCtrl=this;
    ItemDetailsCtrl.itemDetails=item.data.menu_items;
    console.log($stateParams.menuIndex);
    var menuItem=categories.data[$stateParams.menuIndex];
    ItemDetailsCtrl.menuName=menuItem.name;
}
})();
