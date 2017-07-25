
var app=angular.module('myapp',[]);
app.controller('controller',function ($http,$scope) {

    $scope.submit=function () {
        console.log("entered in button successfully");
        var obj={
            firstName:$scope.fn,
            lastName:$scope.ln,
            Age:$scope.age,
            Email:$scope.mail
        };
        $http.post('/msg',obj)
            .then(function (response) {
                console.log(response);
            },function (error) {

            })
        //
    }
});