app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "Fragments/welcome.htm",
        // controller: "WelcomeController",
      })
      .when("/home", {
        url: "/home",
        templateUrl: "Fragments/welcome.htm",
        // controller: "WelcomeController",
      })
      .when("/productList", {
        templateUrl: "Fragments/productList.htm",
        controller: "ProductListController",
      })
      .when("/productDetail/:id", {
        templateUrl: "Fragments/productDetails.htm",
        controller: "ProductDetailsController",
      });
  },
]);
