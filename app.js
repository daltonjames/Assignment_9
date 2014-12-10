//Dalton James, Dalton_James@student.uml.edu   
//UMass Lowell Computer Science
//Student in Jesse Heines GUI Programming I
//    
//File: app.js
//Created: 2014/12/10
//   
//Description: Adds functionality for the add and remove functionality in the html


//function partially taken from Jesse Heines 
//gets the JSON and saves it as an object
//it is then used to create the table with angular
var App = angular.module("angularApp", []); 
App.controller("AppCtrl", function( $scope, $http) {
    $scope.jsonData = {};
    $http.get( "data.json" ).success( function( data ) {
            $scope.jsonData.data = data;
            //console.log(data);
        }).error( function( error) {
            $scope.jsonData.error = error;
        });

    //the function that is called when the Add Record button is clicked
    $scope.addRecord = function() {
        //makes a new array to be added to the table 
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
        //appends the new array to the old JSON data array
        //angular sees the data change and updates the view accordingly 
        $scope.jsonData.data.push(ObjToAdd);
        //console.log($scope.jsonData.data);
    }

    //the function that is called when the Remove Selected button is clicked
    $scope.removeRecord = function() {
        //stores the index of each of the currently selected check boxes
        var $selectedRecords = $("#tblData tr td.remove-checkbox input:checked");

        //if nothing is selected then return nothing
        if ( $selectedRecords.length === 0 ) {
            return;
        }

        //deletes the entry of each selected check box
        //doesn't currently work properly because the index changes when
        //an entry is deleted but it is not updated after the change
        $selectedRecords.each( function( index, element ) {
            var rowIndex = $(element).parent().attr("value");
            //console.log("removing row number "+rowIndex);
            //deletes the entry
            $scope.jsonData.data.splice(rowIndex, 1); 
            //console.log("re-indexing entries");
            //write code to re-order index...
        });
    }
});