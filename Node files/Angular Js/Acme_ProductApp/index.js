var app = angular.module("AcmeApp", ["ngRoute"]);

// app.controller("WelcomeController", []);

app.filter("price", function () {
  return function (input) {
    return "$" + input;
  };
});

app.factory("services", [
  "$http",
  function ($http) {
    var service = {};

    service.getJSONData = function () {
      return $http.get("data/products.json");
    };

    return service;
  },
]);

app.directive("starRating", function () {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "directive.htm",
    scope: {
      rating: "=",
    },
    link: function (scope, elem, attrs) {
      scope.$watch("rating", function (value) {
        if (value) {
          console.log("This is it!");
          console.log(value);
          var val = parseFloat(value);
          var size = (val / 5) * 100 + "%";
          scope.widthStyle = { width: size };
        }
      });
    },
  };
});

app.controller("ProductListController", [
  "$scope",
  "$location",
  "services",
  function ($scope, $location, services) {
    $scope.ToggleImage = "true";
    $scope.Toggletext = "Hide Image";

    services
      .getJSONData()
      .then(function (response) {
        $scope.productList = response.data;
      })
      .catch(function (err) {
        console.log(err);
      });

    $scope.toggleDisplay = function () {
      if ($scope.ToggleImage) {
        $scope.ToggleImage = false;
        return;
      }
      $scope.ToggleImage = true;
      return;
    };

    $scope.getProduct = function (id) {
      console.log(id);
      $location.path("/productDetail/" + id);
    };
  },
]);

app.controller("ProductDetailsController", [
  "$scope",
  "$routeParams",
  "services",
  function ($scope, $routeParams, services) {
    services
      .getJSONData()
      .then(function (response) {
        $scope.productList = response.data;
        $scope.product = $scope.searchProduct(response.data);
        $scope.Id = $scope.product.productId;
        this.rating = $scope.product.starRating;
        console.log($scope.product);
        $scope.rate = $scope.product.starRating;
        console.log($scope.rate);
      })
      .catch(function (err) {
        console.log(err);
      });

    $scope.searchProduct = function (list) {
      for (var i in list) {
        if (list[i].productId == $routeParams.id) {
          return list[i];
        }
      }
    };
  },
]);
