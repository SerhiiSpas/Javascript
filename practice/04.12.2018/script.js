'use strict';


var Student = function (name,surname,grades) {
    this.name = name,
        this.surname = surname,
        this.grades = grades,
        Student.group.push('Student: ' + this.name + ' ' + this.surname + ' ' + ', Grades: ' +this.grades);
    this.fullName = function () {
        console.log(this.name + ' ' + this.surname)
    };
    this.gradesAvarage = function (){
        for (var i = 0, sum = 0; i < this.grades.length; sum += grades[i++]);
        console.log('GPA: ' + (sum/this.grades.length).toFixed(2));
    };
};

Student.group = [];

var student1 = new Student ('Ivan','Ivanov',[4,5,5]);
var student2 = new Student ('Semen','Semenov',[3,5,5]);
var student3 = new Student ('Petr','Petrov',[4,3,5]);


student1.fullName();
student1.gradesAvarage();

console.log(Student.group);