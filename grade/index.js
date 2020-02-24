const marks = require("./models/marks")
const student = require("./models/students");

const jeanMark = new marks("SST", "Jean", 40);
jeanMark.computeGrade();

const zayinabMark = new marks("SST", "Zayinab", 89);
zayinabMark.computeGrade();