class studentMarks {
  constructor(gsubject, gmarks) {
    this.subject = gsubject;
    this.marks = gmarks;
  }
  computeGrade() {
    switch (true) {
      case this.marks > 79:
        console.log("Your grade is A, Exellent");
        break;
      case this.marks > 69:
        console.log("Your grade is B, V.Good");
        break;
      case this.marks > 59:
        console.log("Your grade is C, Good");
        break;
      case this.marks > 49:
        console.log("Your grade is D, Fairly passed");
        break;

      default:
        console.log("Failed, read harder");
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
