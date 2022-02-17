function add(a: number, b: number) {
    return a + b
}

const result = add(1, 7)

console.log(result)

// Generics 


function insertBegining<N>(arr: N[], value: N) {
    const newArr = [value, ...arr]
    return newArr
}

const demo = [1, 2, 3]
const updateArr = insertBegining(demo, 2)

// Class
class Student {

    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: string[]

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]) {

    }

    enrol(courseNAme: string) {
        this.courses.push(courseNAme)
    }

    listCourses (){
        return this.courses.slice()
    }
}

const student = new Student('Vitalii', 'Shurkhal', 28, ['JS', 'React'])

student.enrol('Angular')

console.log(student.listCourses())

// interface

