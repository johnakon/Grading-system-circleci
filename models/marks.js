class StudentMarks {
  constructor(gsubject,gStudent gmarks) {
    this.subject = gsubject;
    this.student = gStudent;
    this.marks = gmarks;
  }
  computeGrade() {
    switch (true) {
      case this.marks > 79:
        console.log(`${this.student} grade in ${this.subject} is A, Exellent`);
        break;
      case this.marks > 69:
        console.log(`${this.student} grade in ${this.subject} is B, V.Good`);
        break;
      case this.marks > 59:
        console.log(`${this.student} grade in ${this.subject} is C, Good`);
        break;
      case this.marks > 49:
        console.log(`${this.student} grade in ${this.subject} is D, Fairly passed`);
        break;

      default:
        console.log(`${this.student} grade in ${this.subject} is F, Failed \n\t\t Read Harder");
        break;
    }
  }
  isValidate() {
    valid = true;
    if (this.student == null) {
      valid = false;
    }
    if (typeof this.marks !== "number") {
      valid = false;
    }
    if (this.marks < 0) {
      valid = false;
    }
    if (this.marks > 100) {
      valid = false;
    }
  }
}

module.export = StudentMarks;
