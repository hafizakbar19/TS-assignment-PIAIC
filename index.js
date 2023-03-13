var englishMarks = 95;
var urduMarks = 85;
var avg = (englishMarks + urduMarks) / 2;
if (avg >= 80 && avg < 100) {
    console.log("A");
}
else if (avg >= 70 && avg < 80) {
    console.log("B");
}
else if (avg >= 60 && avg < 70) {
    console.log("C");
}
else {
    console.log("F");
}
