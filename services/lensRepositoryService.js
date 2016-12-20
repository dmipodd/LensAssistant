angular.module("lensAssistant")
.service("lensRepositoryService", function() {	    
	// TODO send HTTP request
	var lenses = [
		{id: 1,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 2,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 3,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 4,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 5,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 6,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		{id: 7,
		"name": "Air Optix",
		"periodOfUse": "3 m",
		"validTo": "05.2018",
		"power": "-5.0"},
		
		{id: 8,
		"name": "Daily pure vision",
		"periodOfUse": "1 d",
		"validTo": "07.2017",
		"power": "-5.5"}, 
		{id: 9,
		"name": "Daily pure vision",
		"periodOfUse": "1 d",
		"validTo": "07.2017",
		"power": "-5.5"}
	];
	var nextId = 10;
	var saveNewLenses = function (lensForm) {
		if (!lensForm) {
			return;
		}
		for (i=0; i < lensForm.amount; i++) {
			var newLens = angular.copy(lensForm);
			delete newLens.amount;
			newLens.id = nextId++;
			lenses.push(newLens);
		}
	}
	var lensesEqual = function(lens1, lens2) {
		return angular.equals(lens1.name, lens2.name) && 
			   angular.equals(lens1.power, lens2.power)  && 
			   angular.equals(lens1.periodOfUse, lens2.periodOfUse)  && 
			   angular.equals(lens1.validTo, lens2.validTo);
	}
	
	////////////////////// API ////////////////////// 
	
	this.save = function (rightLensForm, leftLensForm) {
		saveNewLenses(rightLensForm);
		saveNewLenses(leftLensForm);
	}
	this.loadLensesSummary = function () {
		return lenses.reduce(function(lensesSummary, current) {
			var wasFound = false;
			for (i =0; i < lensesSummary.length; i++) {
				if (lensesEqual(lensesSummary[i], current)) {
					lensesSummary[i].count++;
					wasFound = true;
					break;
				}
			}
			if (!wasFound) {
				var currentCopy = angular.copy(current);
				currentCopy.count = 1;
				lensesSummary.push(currentCopy);
			}
			return lensesSummary;
		}, []);
	};
});