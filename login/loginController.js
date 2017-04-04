var app=angular.module('mission_design');
app.controller('loginController',function($scope,$state){
	$scope.data={
		companyName : "Acme Company",
		defaultName: "Johnny Ive",
		defaultEmail: "johnny@acme-company.com"
	};
	$scope.submit=function(){
		$state.go('dashboard');
	}

});