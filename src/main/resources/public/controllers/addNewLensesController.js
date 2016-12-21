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
	$scope.saveNew = function () {
		lensRepositoryService.save($scope.rightLens, $scope.leftLens);
		$location.path("/summary");
	}
});