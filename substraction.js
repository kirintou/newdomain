var input1 = Math.floor((Math.random() * 10) + 1);
var input2 = Math.floor((Math.random() * 10) + 1);
var Answer = input1-input2


function question() {
  document.getElementById("substractionQ").innerHTML = `${input1} = ?+${input2} `+"<br>"+`${input1}-${input2} = ?`;
}
question();





document.getElementById("substractionB").onclick = function() {myFunction()};
function myFunction() {
    let inputA = document.getElementById("substractionA").value;
    if (inputA == Answer) {
        document.getElementById("substractionR").innerHTML = `正解です!`;
      } else {
        document.getElementById("substractionR").innerHTML = `?が ${inputA}　であれば、矛盾が生じます`;
      }
}
