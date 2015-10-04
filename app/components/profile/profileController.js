/**
 * Created by chinlam on 2015/10/4.
 */

app.controller('profileController', ['$scope', function ($scope) {
    $scope.volunteer = volunteer ;
}]);

//left bar volunteer info
var volunteer = {
    image : "../../../assets/img/profile.png",
    name : "Jim Lim",
    introduction: "I'm a genius. I work on Data science/analytics and have excellent skills with Matlab and Ruby programming. My hobbies is sporting.",
    participating : "3",
    participated :"8",
};

var profile = {


};


