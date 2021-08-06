var app = angular.module("spa", ["ngRoute"]).config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "Fragments/index.htm",
        controller: "IndexController",
      })
      .when("/about", {
        templateUrl: "Fragments/about.htm",
        controller: "AboutController",
      })

      .when("/career", {
        templateUrl: "Fragments/career.htm",
        controller: "CareerController",
      })

      .otherwise({
        templateUrl: "Fragments/error.htm",
      });
  },
]);
