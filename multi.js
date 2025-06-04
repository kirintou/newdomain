var input1 = Math.floor((Math.random() * 10) + 1);
var input2 = Math.floor((Math.random() * 10) + 1);
var Answer = input1*input2


function question() {
  document.getElementById("multiQ").innerHTML = `${input1}×${input2} = ?`;
}
question();





document.getElementById("multiB").onclick = function() {myFunction()};
function myFunction() {
    let inputA = document.getElementById("multiA").value;
    if (inputA == Answer) {
        document.getElementById("multiR").innerHTML = `正解です!`;
      } else {
        document.getElementById("multiR").innerHTML = `?が ${inputA}　であれば、矛盾が生じます`;
      }
}
