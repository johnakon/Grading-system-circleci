class Marks {
  constructor(subject, student, marks) {
    this.subject = subject;
    this.student = student;
    this.marks = marks;
  }

  computeScore() {
    if (this.marks >= 80) {
      console.log(`${this.student}, you have an A`);
    } else if (this.marks >= 70 && this.marks < 80) {
      console.log(`${this.student}, you have a B`);
    } else if (this.marks >= 60 && this.marks < 70) {
      console.log(`${this.student}, you have a C`);
    } else if (this.marks >= 50 && this.marks < 60) {
      console.log(`${this.student}, you have a D`);
    } else if (this.marks >= 40 && this.marks < 50) {
      console.log(`${this.student}, you have an E`);
    } else if (this.marks >= 0 && this.marks < 40) {
      console.log(`${this.student}, you have an F`);
    }
  }

  isValidate() {
    valid = true;
    if (this.student === null) {
      valid = false;
      console.log("student doenst exist");
    }
    if (typeof (this.marks !== "number")) {
      valid = true;
    }
    if (this.marks < 0) {
      valid = false;
      console.log("Marks should be greater than 0");
    }
    if (this.marks > 100) {
      valid = false;
      console.log("Marks should be less than 100");
    }
  }
}
module.exports = Marks;