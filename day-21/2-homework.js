class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname, year)
        this.year = year
    }

    getCourse() {
        var currentYear = 2020;
        return currentYear - this.year;
    }
}
var student = new Student('John', 'Smith', 2016);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(student.getCourse()); // print 4 - fourth course, because current year 2020