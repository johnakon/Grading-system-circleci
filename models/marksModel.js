class Marks {
  constructor(student, subject, marks) {
    this.student = student;
    this.subject = subject;
    this.marks = marks;
  }

  computeScore() {
    if (this.marks >= 80) {
      console.log("you have scored an A");
    } else if (this.marks >= 70 && this.marks < 80) {
      console.log("You have scored a B");
    } else if (this.marks >= 60 && this.marks < 70) {
      console.log("You have scored a C");
    } else if (this.marks >= 50 && this.marks < 60) {
      console.log("You have scored a D");
    } else if (this.marks >= 40 && this.marks < 50) {
      console.log("You have scored a E");
    } else if (this.marks >= 0 && this.marks < 40) {
      console.log("You have failed");
    }
  }

  isValidate() {
    valid = true;
    if (this.Student === null) {
      valid = false;
      console.log("Student not registered");
    }
    if (typeof this.marks !== "number") {
      valid = false;
      console.log("please enter the right mark");
    }
    if (this.marks < 0) {
      valid = false;
      console.log("The marks value should be Zero and above");
    }
    if (this.marks > 100) {
      valid = false;
      console.log("Marks can't be morethan 100");
    }
    // return valid;
  }
}

module.exports = Marks;
