var app = angular.module("StudentApp", []);

app.factory("StudentService", [
  "$http",
  function ($http) {
    var service = {};

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

app.controller("StudentController", [
  "$scope",
  "StudentService",
  function ($scope, StudentService) {
    $scope.customStyle = { "background-color": "yellow" };
    $scope.loadingStyle = { visibility: "hidden" };

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
      $scope.customStyle = { "background-color": "yellow" };
      $scope.loadingStyle = { visibility: "visible" };

      if (valid && !pristine) {
        $scope.validity = "Valid Form";
        StudentService.postData($scope.student)
          .then(function (sucess) {
            console.log(sucess);
            $scope.customStyle = { "background-color": "green" };
            $scope.loadingStyle = { visibility: "hidden" };
          })
          .catch(function (err) {
            console.log("Error" + err);
            $scope.customStyle = { "background-color": "red" };
            $scope.loadingStyle = { visibility: "hidden" };
          });
      } else {
        $scope.customStyle = { "background-color": "red" };
        $scope.loadingStyle = { visibility: "hidden" };
        console.log("Not a valid Form");
        $scope.validity = "Not a valid Form";
      }
    };

    $scope.updateStudent = function (valid, pristine) {
      $scope.customStyle = { "background-color": "yellow" };
      $scope.loadingStyle = { visibility: "visible" };

      if (valid && !pristine) {
        $scope.validity = "Valid Form";
        StudentService.putData($scope.student.id, $scope.student)
          .then(function (data) {
            console.log(data);
            $scope.customStyle = { "background-color": "green" };
            $scope.loadingStyle = { visibility: "hidden" };
          })
          .catch(function (error) {
            console.log(error);
            $scope.customStyle = { "background-color": "red" };
            $scope.loadingStyle = { visibility: "hidden" };
          });
      } else {
        $scope.customStyle = { "background-color": "red" };
        $scope.loadingStyle = { visibility: "hidden" };
        console.log("Not a valid Form");
        $scope.validity = "Not a valid Form";
      }
    };

    $scope.SelectStudent = function (student) {
      $scope.student.id = student.id;
      $scope.student.name = student.name;
      $scope.student.rollno = student.rollNo;
      $scope.student.date = new Date(student.date);
      $scope.student.email = student.email;
      $scope.student.age = student.age;
      if (student.isMale) {
        $scope.student.isMale = "true";
      } else {
        $scope.student.isMale = "false";
      }
    };

    $scope.getStudentList = function () {
      $scope.list = { visibility: "visible" };
      $scope.validity = "";
      $scope.customStyle = { "background-color": "yellow" };
      $scope.loadingStyle = { visibility: "visible" };

      StudentService.getData()
        .then(function (response) {
          console.log(response.data);
          $scope.count = response.data.length;
          $scope.studentList = response.data;
          $scope.customStyle = { "background-color": "green" };
          $scope.loadingStyle = { visibility: "hidden" };
        })
        .catch(function (err) {
          console.log(err);
          $scope.customStyle = { "background-color": "red" };
          $scope.loadingStyle = { visibility: "hidden" };
        });
    };

    $scope.deleteStudent = function (student) {
      $scope.validity = "";
      $scope.customStyle = { "background-color": "yellow" };
      $scope.loadingStyle = { visibility: "visible" };
      console.log(student.id);

      StudentService.deleteData(student.id)
        .then(function (response) {
          console.log(response.data);
          $scope.count = response.data.length;
          $scope.studentList = response.data;
          $scope.customStyle = { "background-color": "green" };
          $scope.loadingStyle = { visibility: "hidden" };
          $scope.getStudentList();
        })
        .catch(function (err) {
          console.log(err);
          $scope.customStyle = { "background-color": "red" };
          $scope.loadingStyle = { visibility: "hidden" };
        });
    };
  },
]);
