var app=angular.module('mission_design');
app.controller('loginController',function($scope,$state,$timeout){
	$scope.loading=false;
	$scope.data={
		companyName : "Acme Company",
		defaultName: "Johnny Ive",
		defaultEmail: "johnny@acme-company.com"
	};
	$scope.submit=function(){
		$scope.loading=true;
		$timeout(function() {
			$state.go('dashboard');
		}, 1000);
		
	}

});