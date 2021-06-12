'use strict'

class Courses{
    constructor (courseID, title, instructor, seats, status, daysOTW, time){
        this.courseID = courseID;
        this.title = title;
        this.instructor = instructor;
        this.seats = seats;
        this.status = status;
        this.daysOTW = daysOTW;
        this.time = time;
    }
    static fee = 10.95;
    
    isOpenRegistration(){
        return this.status === "open";
    }
}

class Student{
    constructor (firstName, lastName, phoneNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this._enrolledCourses = [];
    }
    enroll(course){
        this._enrolledCourses.push(`${course.title} with ${course.instructor}`);
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
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

let course1 = new Courses(1, "Spanish 101", "Senor Chang", 10, "open", ["Monday", "Wednesday", "Friday"], 930);
let course2 = new Courses(2, "Starting C#", "Miss Code", 12, "open", ["Tuesday", "Thursday"], 1600);
let course3 = new Courses(3, "Conspiracy Theories", "Professor Professorson", 10, "closed", ["Monday", "Wednesday", "Friday"], 1430);
let course4 = new Courses(4, "Intro to Ladders", "Mr. Teacher", 10, "open", ["Tuesday", "Thursday"], 1100);

function displayCoursesFn(...courseList){
    let displayCourses = ' ';
    courseList.forEach(function(course){
        displayCourses += `<b>${course.title}</b> with <b>${course.instructor}</b>: <b>${course.daysOTW}</b> at <b>${course.time}</b>. Enrollment status: <b>${course.status}</b><br>`;
    });
    document.getElementById("display-Classes").innerHTML = displayCourses;
}
let courseList = [course1, course2, course3, course4];
displayCoursesFn(...courseList);

let student1 = new Student("Liz", "Loftus", "555-123-9876");
student1.enroll(course1);
student1.enroll(course4);
let student2 = new Student("Penny", "Lane", "555-765-1234");
student2.enroll(course2);
let student3 = new Student("Taylor", "Swift", "555-873-1397");
student3.enroll(course1);
student3.enroll(course2);
let student4 = new Student("Miley", "Cyrus", "555-678-5239");
student4.enroll(course4);
