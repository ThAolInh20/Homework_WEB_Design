// Tạo một constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Thêm phương thức sayHello vào đối tượng prototype của Person
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// Tạo một thể hiện của Person
var person1 = new Person("Alice", 30);

// Gọi phương thức sayHello
person1.sayHello(); // In ra: "Hello, my name is Alice and I am 30 years old."

// __proto__ của person1 trỏ đến đối tượng prototype của Person
console.log(person1.__proto__ === Person.prototype); // true
