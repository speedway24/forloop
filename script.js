
var myLikes = ["speedway", "programmering", "ishockey", "umgås med vänner", "designa snygga appar och webbsidor"];

function makeList() {
  
    var lista = document.createElement("ul");

    for (var i = 0; i < myLikes.length; i++) {

       
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(myLikes[i]));

       
        lista.appendChild(listItem);
    }
    return lista;
}
    
document.getElementById('minLista').appendChild(makeList(myLikes[0]));