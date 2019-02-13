var Demo = /** @class */ (function () {
    function Demo(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Demo;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Demo("Jane", "M.", "User");
console.log(greeter(user));
//# sourceMappingURL=Demo.js.map