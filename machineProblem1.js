// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: 	Computation of Grades using Function
	Programmer: Ivan Castro
	Section: 	BCS22
	Start Date: April 20, 2023
	End Date: 	April 23, 2023
*/
const prompt = require('prompt-sync')({sigint: true});

function average(array) {
	let totalGrade = 0;
	for(let i = 0; i < array.length; i++) {
		totalGrade += array[i];
	}
	return totalGrade / array.length;
}

function checkLetterGrade(overallGrade) {
	if(overallGrade < 60) {
		return 'F';
	} else if(overallGrade <= 70) {
		return 'D';
	} else if(overallGrade <= 80) {
		return 'C';
	} else if(overallGrade <= 90) {
		return 'B';
	} else {
		return 'A';
	}
}
const students = [];
for(let j = 0; j < 5; j++) {	
	let totalEnabling = 0;
	let totalSummative = 0;
	const enablingGrades = [5];
	const summativeGrades = [3];
	let name = prompt(`Enter the name of the student: `);
	// read enabling assessments grade
	for(let i = 0; i < 5; i++) {
	let grade = parseInt(prompt(`Enter enabling assessment ${i + 1}: `));
		enablingGrades[i] = grade;
	}
	for(let arg of enablingGrades) {
		totalEnabling += arg;
	}
	let enablingGrade = average(enablingGrades);
	// read summative assessments grade
	for(let i = 0; i < 3; i++) {
		let grade = parseInt(prompt(`Enter summative assessment ${i + 1}: `));
		summativeGrades[i] = grade;
	}
	for(let arg of summativeGrades) {
		totalSummative += arg;
	}
	let summativeGrade = average(summativeGrades);
	// read major exam grade
	let examGrade = parseInt(prompt(`Enter major exam grade: `));
	let gradeScore = ((enablingGrade * 0.3) + (summativeGrade * 0.3) + (examGrade * 0.4));
	let letterGrade = checkLetterGrade(gradeScore);
	//compile student record
	students.push({
        StudentName: name,
        ClassParticipation: parseFloat(enablingGrade.toFixed(2)),
        SummativeAssessment: parseFloat(summativeGrade.toFixed(2)),
        ExamGrade: examGrade,
        GradeScore: parseFloat(gradeScore.toFixed(2)),
        LetterGrade: letterGrade
    });
	console.table(students);
}