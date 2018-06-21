angular.module('app.controllers', [])
  
.controller('mNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('ISNhNgCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    //$scope.players = [{ Name = "Linh" }, { Name = "Phương" }];
    $scope.greeting = 'Hola!';
    $scope.addName = "";
    $scope.players = [{ Name: "Linh" }, { Name: "Phương" }];
    //$scope.addName = "dsadsadadasdas";
    $scope.add = function () {
        // nếu người dùng có nhập nội dung thì lưu nó vào list
        console.log(this.addName);
        if ( this.addName === "" ) {
            alert('ĐM tên gì pa?');
        }
        else {
            $scope.players.push({ Name: this.addName });
        }
    };
    $scope.chay = function (idx) {
        // nếu người dùng có nhập nội dung thì lưu nó vào list
        console.log(idx)
        if (idx > -1 && idx < $scope.players.length) {
            $scope.players.splice(idx, 1);            
        }
    };
}])
   
.controller('giangHCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('xemVKhCCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('BCThYCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 