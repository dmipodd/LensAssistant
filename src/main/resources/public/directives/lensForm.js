angular.module("lensAssistant")
.directive("lensForm", function($parse) {
    return {
        link: function(scope, element, attrs) {},
        restrict: "EA",
        templateUrl: "/directives/lensForm.html",
        replace: true,
        scope: {
            lens: '=lensObject',
            formIsValid: '=formIsValid',
            formName: '@formName'
        },
        controller: function ($scope, $element, $attrs, $filter, $parse) {
            $scope.lens = {};
            $scope.datePickerFormat = 'yyyy-MM';
            $scope.openDatePickerPopup = function() {
                $scope.datePickerPopup.opened = true;
            };
            $scope.datePickerPopup = {
                opened: false
            };
            $scope.$watch($scope.formName + '.$valid || ' + $scope.formName + '.$pristine',
                function(newVal, oldVal){
                    $scope.formIsValid = newVal || $parse($scope.formName + '.$pristine')($scope);
                }
            );
            // workaround to save validTo as string (not a Date)
            $scope.$watch('lens.validToDate', function(newVal, oldVal){
                $scope.lens.validTo = $filter('date')(newVal,'yyyy-MM');
            });
        }
    }
});