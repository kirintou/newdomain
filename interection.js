

document.getElementById("excutebutton").onclick = function() {myFunction2()};

function myFunction2() {
    let inputA = document.getElementById("searchTxt").value;
    document.getElementById("output").innerHTML = `こんにちは、 ${inputA}　さん`;
}