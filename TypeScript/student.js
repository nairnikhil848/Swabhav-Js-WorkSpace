"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
var Address = /** @class */ (function () {
    function Address(location, city) {
        this.location = location;
        this.city = city;
    }
    Object.defineProperty(Address.prototype, "City", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
