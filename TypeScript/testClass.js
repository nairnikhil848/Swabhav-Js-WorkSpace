var Customer = /** @class */ (function () {
    function Customer(id, firstName, lastName) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "LastName", {
        set: function (name) {
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var c1 = new Customer(101, "abc", "pqr");
console.log(c1.FirstName);
c1.FirstName = "Nikhil";
console.log(c1.FirstName);
