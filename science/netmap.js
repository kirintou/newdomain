

document.getElementById("Crick").onclick = function() {myFunction()};

function myFunction() {
    let inputA = document.getElementById("Atext1").value;
    if (inputA == "8") {
        document.getElementById("Aout1").innerHTML = `正解です!`;
      } else {
        document.getElementById("Aout1").innerHTML = `答えは ${inputA}　ではありません。`;
      }
}