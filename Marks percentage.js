function calculatePercentage() {
    var totalMarks = document.getElementById("totalMarks").value;
    var marksScored = document.getElementById("marksScored").value;
    var percentage = (marksScored / totalMarks) * 100;
    document.getElementById("result").innerHTML = "Percentage: " + percentage + "%";
  }