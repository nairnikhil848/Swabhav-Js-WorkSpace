app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "Fragments/home.htm",
        controller: "HomeController",
      })
      .when("/home", {
        url: "/home",
        templateUrl: "Fragments/home.htm",
        controller: "HomeController",
      })
      .when("/add", {
        templateUrl: "Fragments/add.htm",
        controller: "AddStudentController",
      })
      .when("/edit/:id", {
        templateUrl: "Fragments/edit.htm",
        controller: "EditController",
      });
  },
]);
