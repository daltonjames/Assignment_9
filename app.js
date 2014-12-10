"use strict";

var App = angular.module("dolphinApp", []);
App.controller("AppCtrl", function( $scope, $http) {
	$scope.jsonData = {};
	$http.get( "data.json" ).success( function( data ) {
			$scope.jsonData.data = data;
			console.log(data);
		}).error( function( error) {
			$scope.jsonData.error = error;
		});

	$scope.addRecord = function() {


		var ObjToAdd = {
			"index": $scope.jsonData.data.length,
			"balance": $scope.enteredBalance,
	        "age": parseInt($scope.enteredAge),
	        "eyeColor": $scope.enteredEyeColor,
	        "name": $scope.enteredName,
	        "gender": $scope.enteredGender,
	        "company":  $scope.enteredCompany,
	        "email": $scope.enteredEmail,
	        "phone": $scope.enteredPhone,
	        "address": $scope.enteredAddress
		}
		$scope.jsonData.data.push(ObjToAdd);
		console.log($scope.jsonData.data);
	}

	$scope.removeRecord = function() {
		var $selectedRecords = $("#tblData tr td.remove-checkbox input:checked");

		if ( $selectedRecords.length === 0 ) {
			return;
		}

		$selectedRecords.each( function( index, element ) {
			var rowIndex = $(element).parent().attr("value");
			console.log("removing row number "+rowIndex);
			$scope.jsonData.data.splice(rowIndex, 1); //deletes the entry
			console.log("re-indexing entries");
			//write code to re-order index...
		});
	}
});