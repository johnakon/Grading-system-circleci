const marks = require("./models/marksModel");
const student = require("./models/studentModel");

const mark1 = new marks("John", "Literature", 50);
//lets compute the score
mark1.computeScore();

const johnGrade = new marks("Akonya", "P.E", 75);
johnGrade.computeScore();
