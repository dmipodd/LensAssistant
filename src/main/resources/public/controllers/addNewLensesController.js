angular.module("lensAssistant")
    .controller("addNewLensesController", function ($scope, lensRepositoryService, $location) {
        $scope.rightLensPanelVisible = false;
        $scope.showRightLensPanel = function (sameAsLeftLens) {
            if (sameAsLeftLens) {
                $scope.rightLens = angular.copy($scope.leftLens);
            } else {
                $scope.rightLens = {};
            }
            $scope.rightLensPanelVisible = true;
        }

        $scope.lensesFormsAreValid = function () {
            return $scope.leftLensFormIsValid && (!$scope.rightLensPanelVisible || $scope.rightLensFormIsValid);
        }

        $scope.saveNew = function () {
            if ($scope.lensesFormsAreValid()) {
                lensRepositoryService.save($scope.rightLens, $scope.leftLens);
                $location.path("/summary");
            }
        }
    });