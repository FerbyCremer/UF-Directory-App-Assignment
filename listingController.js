angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.showForm = false;
    $scope.detailedInfo =  undefined;
    $scope.form = {};

    $scope.addListing = function() {
      $scope.listings.push($scope.form);
      $scope.form = {};
      $scope.showForm = !$scope.showForm;
    }

    $scope.deleteListing = function(entry) {
        let newListings = [];  //copy over list of buildings into new array while filtering out the ones to delete
        newListings = $scope.listings.filter(function (listing) {
          let deleteName = entry.name;
          let deleteCode = entry.code;
          if ( listing.name !== deleteName && listing.code !== deleteCode) {
            return listing;
          }
        });
        //then replace listings with newListings
        $scope.listings = newListings;
        //delete related detailedInfo
        $scope.detailedInfo = undefined;
    }

    $scope.showDetails = function(entry) {
      $scope.detailedInfo = entry;
    }

    $scope.changeForm = function () {
      $scope.showForm = !$scope.showForm;
    }
  }
]);