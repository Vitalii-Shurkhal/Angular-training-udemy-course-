var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
var result = add(1, 7);
console.log(result);
// Generics 
function insertBegining(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
}
var demo = [1, 2, 3];
var updateArr = insertBegining(demo, 2);
// Class
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: string[]
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseNAme) {
        this.courses.push(courseNAme);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Vitalii', 'Shurkhal', 28, ['JS', 'React']);
student.enrol('Angular');
console.log(student.listCourses());
