
var app=angular.module('myapp',[]);
app.controller('controller',function ($http,$scope) {

    $scope.channels=["ch3","ch4","ch5"];
    $scope.submit=function () {
        console.log("entered in button successfully");
        var obj={
            channel:$scope.selectedName,
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