var userInput = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var shopList = document.querySelectorAll("ul.shoppingList li");
var del = document.querySelectorAll("ul.shoppingList li > button");


function refreshQuery(){ 
    userInput = document.getElementById("userinput");
    button = document.getElementById("enter");
    ul = document.querySelector("ul");
    shopList = document.querySelectorAll("ul.shoppingList li");
    del = document.querySelectorAll("ul.shoppingList li > button");
}



function inputLength(){
    return userInput.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    li.appendChild(button);
    userInput.value = "";//Clear the input.
    refreshQuery();//To refresh the query. To account for the added element
    listEventListener();//Refresh the listener. To account for added element
}

function addListAfterClick(){
    if(inputLength()){//If zero false
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength()&& event.keyCode === 13){
        createListElement();
    }  
}
//Cross out the item from the list
function crossOutFromList(event){
    var item = event.path[0];
    item.classList.toggle("done");
}
//Remove the item from the list
function removeItemFromLIst(event){
    var parent = event.path[1];//Get the parent 
    var grandParent = parent.parentNode;//Get the parent
    grandParent.removeChild(parent);
}



button.addEventListener("click",addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeyPress);

function listEventListener(){
    //This cross out the item from the list
for(var i=0; i < shopList.length; i++){
    var list = shopList[i];
    list.addEventListener("click",crossOutFromList);
}
//This remove the item from the list
for(var i=0; i< del.length; i++){
    var delItem = del[i];
    delItem.addEventListener("click", removeItemFromLIst)
}

}
//Listen for an event listener of the crossout and delete
listEventListener();

