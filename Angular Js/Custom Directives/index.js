angular
  .module("docsSimpleDirective", [])
  .controller("Controller", [
    "$scope",
    function ($scope) {
      $scope.name = "123";
      $scope.address = "1600 Amphitheatre";
      $scope.email = "n@gmail.com";
      $scope.companyName = "Swabhav";
    },
  ])
  .directive("nikhilHeader", function () {
    return {
      restrict: "E",
      companyName: "=",
      template: "<header> <p>Company Name:{{companyName}}</p></header>",
    };
  })
  .directive("nikhilFooter", function () {
    return {
      restrict: "E",
      name: "=",
      address: "=",
      email: "=",
      template:
        '<footer> <p>Author:{{name}}</p> <p>Address: {{address}}</p> <p><a href="">{{email}}</a></p> </footer>',
    };
  });
