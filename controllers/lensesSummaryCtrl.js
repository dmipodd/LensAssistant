angular.module("lensAssistant")
.constant("dataUrl", "http://localhost:5500/summary")
.controller("lensesSummaryCtrl", function ($scope, $http, $location, dataUrl, lensRepositoryService) {

	$scope.$on("$locationChangeSuccess", function (event, newUrl) {
		if ($location.path() === "/summary") {
			$scope.lensesSummary = lensRepositoryService.loadLensesSummary();
		}
	});

});