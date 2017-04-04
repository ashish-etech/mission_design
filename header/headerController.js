var app=angular.module('mission_design');
app.controller('headerController',function($scope){
$scope.hide=false;
	$scope.data={
		companyName : "Acme Company",	
		accountLetters: "IB",
		currentOfferName : "Junior front developer",
		states: [
			{state: "À traiter",  value: "10", onClick: function() {}},
			{state: "Contactés",  value: "62", onClick: function() {}},
			{state: "Répondus",   value: "29", onClick: function() {}},
			{state: "En process", value: "12", onClick: function() {}},
			{state: "Recrutés",   value: "3" , onClick: function() {}}
		],
		offerList : [
			{ name: "Junior frontend developer", onClick: function() {} },
			{ name: "Web security hacker", onClick: function() {} },		
			{ name: "Developer evangelist", onClick: function() {} },
			{ name: "Chief happiness officer", onClick: function() {} } 
		],
		clickOnGoToOffers: function() {}, // Mes offres
		clickOnChangeAccount: function() {}, // Changer de compte
		clickOnLogout: function() {} // Déconnexion
	}
	$scope.focus=function(){
		if ($scope.value=='') {
			$scope.hide=false;
		}else{
		$scope.hide=true;}
	}

});



