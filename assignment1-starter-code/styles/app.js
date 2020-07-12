(function() {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
  // $scope.name = "kamelsh";
  $scope.discp = "";
  $scope.cnt = "Please enter data first";
  $scope.display = function ()
  {
    var pam = calc($scope.name);
    $scope.cnt = pam;
  };
    function calc(string)
    {
        var l=0;
        // var firstName = $scope.name;
        const words = string.split(",");
        for (var i = 0; i < words.length; i++)
        {
            if(words[i]!=" ")
            {
              console.log(words[i]);
                l++;
            }
        }
        console.log(l);
        if(l<=3)
          return "Enjoy!";
        else
            return "Too much!!!";
    };
}
})();
