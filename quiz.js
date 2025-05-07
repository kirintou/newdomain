

document.getElementById("answer1").onclick = function() {myFunction()};

function myFunction() {
    let inputA = document.getElementById("Atext1").value;
    if (inputA == "8") {
        document.getElementById("Aout1").innerHTML = `Correct!`;
      } else {
        document.getElementById("Aout1").innerHTML = `answer is not ${inputA}`;
      }
}