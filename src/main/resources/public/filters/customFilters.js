angular.module("customFilters", [])
.filter("pairs", function () {
    return function (data) {
        if (angular.isNumber(data) && data > 0) {
			var pairsCount = Math.floor(data / 2),
				singlesCount = data % 2,
				result = '';
			if (pairsCount > 0) {
				result = pairsCount + (pairsCount === 1 ? " pair" : " pairs");
				if (singlesCount > 0) {
					result += ", ";
				}
			}
			if (singlesCount > 0) {
				result += singlesCount + " single";
			}
            return result;
        } else {
            return data;
        }
    }
});
