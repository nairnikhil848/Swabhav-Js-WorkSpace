var app = angular.module("Student-spa", ["ngRoute"]);

app.factory("StudentService", [
  "$http",
  function ($http) {
    var service = {};

    service.getStudent = function (id) {
      return $http.get(
        "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" + id
      );
    };

    service.getData = function () {
      return $http.get(
        "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students"
      );
    };

    service.postData = function (data) {
      return $http.post(
        "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students",
        data
      );
    };

    service.putData = function (id, data) {
      return $http.put(
        "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" +
          id,
        data
      );
    };

    service.deleteData = function (id) {
      return $http.delete(
        "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/" + id
      );
    };

    return service;
  },
]);

app.filter("gender", function () {
  return function (input) {
    if (input) {
      return "M";
    }
    return "F";
  };
});
app.controller("HomeController", [
  "$scope",
  "StudentService",
  "$location",
  "$timeout",
  function ($scope, StudentService, $location, $timeout) {
    $scope.alert = {
      output: false,
      Result: "Oops! Got an Error",
      style: { display: "none" },
    };
    StudentService.getData()
      .then(function (response) {
        console.log(response.data);
        $scope.count = response.data.length;
        $scope.studentList = response.data;
      })
      .catch(function (err) {
        console.log(err);
      });

    $scope.SelectStudent = function (student) {
      console.log(student);
      $location.path("/edit/" + student.id);
    };

    $scope.SaveStudent = function (student) {
      $scope.student = student;
    };

    $scope.deleteStudent = function () {
      StudentService.deleteData($scope.student.id)
        .then(function (response) {
          console.log(response.data);
          $scope.alert = {
            output: true,
            Result: "Success Deleting the Profile",
            style: { display: "block" },
          };
        })
        .catch(function (err) {
          console.log(err);
          $scope.alert = {
            output: false,
            Result: "Error Deleting an Record Pls Try Again",
            style: { display: "block" },
          };
        });
    };
  },
]);

app.controller("EditController", [
  "$scope",
  "StudentService",
  "$location",
  "$routeParams",
  "$timeout",
  function ($scope, StudentService, $location, $routeParams, $timeout) {
    $scope.alert = {
      output: false,
      Result: "Oops! Got an Error",
      style: { display: "none" },
    };
    $scope.student = {
      name: "",
      rollno: "",
      email: "",
      date: "",
      age: "",
      isMale: "",
    };
    console.log($routeParams);
    $scope.id = $routeParams.id;

    StudentService.getStudent($scope.id)
      .then(function (success) {
        console.log(success.data[0]);
        console.log(success);
        $scope.student.name = success.data[0].name;
        $scope.student.rollno = success.data[0].rollNo;
        $scope.student.email = success.data[0].email;
        $scope.student.date = new Date(success.data[0].date);
        $scope.student.age = success.data[0].age;
        if (success.data[0].isMale) {
          $scope.student.isMale = "true";
        } else {
          $scope.student.isMale = "false";
        }
      })
      .catch(function (err) {
        console.log(err);
        $scope.alert = {
          output: false,
          Result: "Error Deleting an Record Please Check Again",
          style: { display: "block" },
        };
      });

    $scope.clear = function () {
      $scope.student = {
        name: "",
        rollno: "",
        email: "",
        date: "",
        age: "1",
        isMale: "",
      };
    };

    $scope.updateStudent = function (valid, pristine) {
      if (valid && !pristine) {
        $scope.validity = "Valid Form";
        StudentService.putData($scope.id, $scope.student)
          .then(function (sucess) {
            console.log(sucess);
            $scope.alert = {
              output: true,
              Result: "Success Updating the Profile",
              style: { display: "block" },
            };
            $timeout(function () {
              $location.path("/");
            }, 5000);
          })
          .catch(function (error) {
            console.log(error);
            $scope.alert = {
              output: false,
              Result: "Oops! Got an Error",
              style: { display: "block" },
            };
          });
      } else {
        console.log("Not a valid Form");
        $scope.alert = {
          output: false,
          Result: "Not an Valid Form",
          style: { display: "block" },
        };
      }
    };
  },
]);

app.controller("AddStudentController", [
  "$scope",
  "StudentService",
  "$location",
  "$timeout",
  function ($scope, StudentService, $location, $timeout) {
    $scope.alert = {
      output: false,
      Result: "Oops! Got an Error",
      style: { display: "none" },
    };

    $scope.student = {
      name: "",
      rollno: "",
      email: "",
      date: "",
      age: "21",
      isMale: "true",
    };

    $scope.clear = function () {
      $scope.student = {
        name: "",
        rollno: "",
        email: "",
        date: "",
        age: "1",
        isMale: "",
      };
    };

    $scope.PostStudent = function (valid, pristine) {
      if (valid && !pristine) {
        StudentService.postData($scope.student)
          .then(function (sucess) {
            console.log(sucess);
            $scope.alert = {
              output: true,
              Result: "Success Your Id is:" + sucess.data,
              style: { display: "block" },
            };
            $timeout(function () {
              $location.path("/");
            }, 5000);
          })
          .catch(function (err) {
            console.log("Error" + err);
            $scope.alert = {
              output: false,
              Result: err,
              style: { display: "block" },
            };
          });
      } else {
        $scope.alert = {
          output: false,
          Result: "Not a valid Form",
          style: { display: "block" },
        };
      }
    };
  },
]);
