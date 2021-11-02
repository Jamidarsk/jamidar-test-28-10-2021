


var jamidar;

function showData()
{
    var EMAIL = document.getElementById("inputEmail4").value;
    console.log(EMAIL);
    var PASSWORD=document.getElementById("inputPassword4").value;
    console.log(EMAIL," ",PASSWORD);

    var data = EMAIL + ":" +PASSWORD;

    var element =document.createElement("h2");

    var dataNode =document.createTextNode(data);

    element.appendChild(dataNode);

    document.getElementById("showinputdata").appendChild(element);

}
