angular.module("lensAssistant")
    .constant("dataUrl", "http://localhost:5500/summary")
    .controller("lensesSummaryCtrl", function ($scope, $http, $location, dataUrl, lensRepositoryService) {

        function reloadLensesSummary() {
            $scope.lensesSummary = lensRepositoryService.loadLensesSummary();
        }

        $scope.$on("$locationChangeSuccess", function (event, newUrl) {
            if ($location.path() === "/summary") {
                reloadLensesSummary();
            }
        });

        $scope.startUsingLenses = function (lensesSummaryItem) {
            lensRepositoryService.startUsingLenses(lensesSummaryItem, 1);
            reloadLensesSummary();
        };

    });