'use strict'

class Courses{
    constructor (courseID, title, instructor, seats, status){
        this.courseID = courseID;
        this.title = title;
        this.instructor = instructor;
        this.seats = seats;
        this.status = status;
    }
    static fee = 10.95;
    
    isOpenRegistration(){
        return this.status === "open";
    }
}
class Agenda extends Courses{
    constructor(morningSesh, afternoonSesh, examFormat){
        this.morningSesh = morningSesh;
        this.afternoonSesh = afternoonSesh;
        this.examFormat = examFormat;
    }
    static passingScore = 0.6;//60%
    static fromCourses(course){
        return new Agenda(course.CourseID, course.title, course.instructor);
    }
}
class Student{
    constructor (firstName, lastName, role, phoneNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.phoneNumber = phoneNumber;
    }
    enroll(courseID){
        this._enrolledCourses.push(courseID);
    }
    set fullName (fullName){
        let namePart = fullName.split(' ');
        this.firstName = namePart[0];
        this.lastName = namePart[1];
    }
    getCourses(){
        return `${this.fullName} is enrolled in the following courses: ${this._enrolledCourses.join(',')}`;
    }
}

let course1 = new Courses(1, "Spanish 101", "Senor Chang", 10, "open");
let course2 = new Courses(2, "Starting C#", "Miss Code", 12, "open");
let course3 = new Courses(3, "Conspiracy Theories", "Professor Professorson", 10, "closed");
let course4 = new Courses(4, "Intro to Ladders", "Mr. Teacher", 10, "open");