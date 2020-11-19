class IndividualInformation {
    constructor(forenames, surname, emailAdress, dateOfBirth) {
       this.forenames = forenames;
       this.surname = surname;
       this.emailAdress = emailAdress;
       this. dateOfBirth = dateOfBirth;
       this.firstName = forenames[0];
       this.fullName = forenames + surname; }

}


class Student extends IndividualInformation {
    constructor(forenames, surname, emailAdress, dateOfBirth, linkToDegree) {
super(forenames, surname, emailAdress, dateOfBirth);
this.linkToDegree = linkToDegree;
    }

}


class Lecturer extends IndividualInformation {
    constructor(forenames, surname, emailAdress, dateOfBirth, responsibleForTheseDegrees) {
super(forenames, surname, emailAdress, dateOfBirth);
this.responsibleForTheseDegrees = responsibleForTheseDegrees;
    }
}

class Degree {
    constructor(thisDegreeName, thisDegreeDurationInYears, coursesPartOfThisDegree, thisDegreeLecturer) {
        this.thisDegreeName = thisDegreeName;
        this.thisDegreeDuration = thisDegreeDurationInYears;
        this.coursesPartOfThisDegree = coursesPartOfThisDegree;
        this.thisDegreeLecturer = thisDegreeLecturer;

    }
}

class Course {
    constructor(thisCourseName, thisCourseDurationInMonths, coursesPartOfDegree, degreesLinkedToThisCourse) {
        this.thisCourseName = thisCourseName;
        this.thisCourseDurationInMonths = thisCourseDurationInMonths;
        this.coursesPartOfDegree = coursesPartOfDegree;
        this.degreesLinkedToThisCourse = degreesLinkedToThisCourse;
    }
}
//A Student's input:
let newStudent = new Student(['Stewart', 'Malibongwe'], 'Chirume', 
'Schirume1999@gmail.com', '07/05/1977', 'Mechanical Engineer.cut.ac.za');
console.log(newStudent);

//A Lecturer's input:
let newLecturer = new Lecturer(['George', 'Marufu'], 'Chirume', 
'reachingmaths@gmail.com', '20/10/1969', 'BSc in Software Engineering');
console.log(newLecturer);

//A random degree input:
let newDegree = new Degree('BSc in Software Engineering', '4 Years',
 ['Programming', 'Digital Systems'], newLecturer.fullName)
 console.log(newDegree);

 //A random course input:
 let newCourse = new Course('Web Development', '6 Months', 
 ['HTML', 'CSS', 'JavaScript'], newDegree.thisDegreeName);
 console.log(newCourse);