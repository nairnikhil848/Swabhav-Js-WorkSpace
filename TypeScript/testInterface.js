function printInfo(customers) {
    for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
        var c = customers_1[_i];
        console.log(c);
    }
}
printInfo([
    { id: 101, firstName: 'abc', lastName: 'def' },
    { id: 102, firstName: 'abc1', lastName: 'def1' },
    { id: 103, firstName: 'abc2', lastName: 'def2' },
    { id: 104, firstName: 'abc3', lastName: 'def3' }
]);
