angular.module("lensAssistant")
.directive("lensForm", function() {
    return {
        link: function(scope, element, attrs) {},
        restrict: "EA",
        templateUrl: "/directives/lensForm.html",
        replace: true,
        scope: {
            lens: '=lensObject'
        },
        controller: function ($scope, $element, $attrs, $filter) {
            $scope.lens = {};
            $scope.datePickerFormat = 'yyyy-MM';
            $scope.openDatePickerPopup = function() {
                $scope.datePickerPopup.opened = true;
            };
            $scope.datePickerPopup = {
                opened: false
            };
            $scope.$watch('lens.validToDate', function(newVal, oldVal){
                $scope.lens.validTo = $filter('date')(newVal,'yyyy-MM');
            });
        }
    }
});