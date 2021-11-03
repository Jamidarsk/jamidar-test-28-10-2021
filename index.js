


var jamidar;

function showData()
{
    var EMAIL = document.getElementById("inputEmail4").value;
    console.log(EMAIL);
    var PASSWORD=document.getElementById("inputPassword4").value;
    console.log(EMAIL," ",PASSWORD);

    var data = EMAIL + ":" +PASSWORD;

    var element =document.createElement("li");

    element.className = "list-group-item";

    var dataNode =document.createTextNode(data);

    element.appendChild(dataNode);

    document.getElementById("showinputdata").appendChild(element);

    localStorage.setItem("DATA : ",data);


}
