var input1 = Math.floor((Math.random() * 10) + 1);
var input2 = Math.floor((Math.random() * 10) + 1);
var Answer = input1+input2


function question() {
  document.getElementById("additionQ").innerHTML = `${input1}+${input2} = ?`;
}
question();





document.getElementById("additionB").onclick = function() {myFunction()};
function myFunction() {
    let inputA = document.getElementById("additionA").value;
    if (inputA == Answer) {
        document.getElementById("additionR").innerHTML = `正解です!`;
      } else {
        document.getElementById("additionR").innerHTML = `?が ${inputA}　であれば、矛盾が生じます`;
      }
}
