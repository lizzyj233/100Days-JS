'use strict';

(function(){
    //classes can replace constructor functions
    class Person{
        constructor (firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.membership = "New Member";//you don't need to take parameters when constructing
        }
        //getters are default set to false enumerable so won't display when you log the whole Person object - the getter is on the object prototype
        get fullName () {
            return this.firstName + ' ' + this.lastName;
        }
        set fullName (fullName){
            let nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
        //you can put functions inside your classes
        isAdult(){
            return this.age >= 18;
        }
    }

    //inherit from another class using "extends"
    class Student extends Person {
        constructor(firstName, lastName, age){
            super(firstName, lastName, age);//super() calls the constructor on the class we are extending
            this._enrolledCourses = [];
        }
        static fromPerson(person){
            return new Student(person.firstName, person.lastName, person.age);
        }
        static semester ="FALL2021";

        static studentID(){
            return Math.random();
        }

        enroll(courseId){
            this._enrolledCourses.push(courseId);
        }
        //getCourses() is NOT a static method bc you have to create an instance of this class to access; can't access by calling "Student.getCourses()"
        getCourses(){
            return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
        }
    }

    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});//make the class getter enumerable

    let liz = new Person ('Liz', 'Loftus', 26);
    console.log(liz);

    liz.fullName = "Penny Lane";//manipulate properties previously defined

    console.log(liz.fullName);
    console.log(liz.isAdult());

    let kyle = new Student('Kyle', 'Mathias', 27);
    kyle.enroll('MA101');
    kyle.enroll('CS120');
    console.log(kyle);
    console.log(kyle.getCourses());

    let lizStudent = Student.fromPerson(liz);//uses an already existing Person object to create a Student object via static function
    console.log(lizStudent);
    console.log(Student.semester);//static functions do not require an object to be created to be accessed
    //console.log(Student.studentID());
})();