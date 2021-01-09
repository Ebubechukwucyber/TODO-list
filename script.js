var form = document.getElementById("form");
var item = document.getElementById("item");
var filter = document.getElementById("filter");

//add delete button
item.addEventListener("click", deleteItem)
//add submit event
form.addEventListener("submit", addItem);
// add keyup DOM
filter.addEventListener("keyup", filterList);

//add item function
function addItem(e){
e.preventDefault();

//get input value
var input = document.getElementById("input").value;

//create new li element
var li =   document.createElement("li");
li.className = "list";

//add text node
var liText = document.createTextNode(input);

//append liText to li
 li.appendChild(liText);

 //create delete button
 var deleteBtn = document.createElement("button");
 deleteBtn.className = "delete";

 //add text node
 var btn = document.createTextNode("x");
 
 //append btn to deleteBtn
 deleteBtn.appendChild(btn);

 //append deleteBtn to list
 li.appendChild(deleteBtn);


//append item to itemList
item.appendChild(li);
}

//create function to delete item
function deleteItem(e){
if(e.target.classList.contains("delete")){
    if(confirm("Are you sure?")){
        var li =e.target.parentElement;
        item.removeChild(li);
    }
}
}


// Function to filter lists
function filterList(e){
    // converts all to lowercase
    var text = e.target.value.toLowerCase();

    //get list items
    var list = item.getElementsByTagName("li");

    //Loop through
    for(var i=0; i < list.length; i++){
        //get first child from list
        var itemName = list[i].firstChild.textContent;
        //convert list to lowercase too
        var listLower= itemName.toLowerCase();
        //get filter lists
        if(listLower.indexOf(text) != -1){
           list[i].style.display ="block";
        }else{
           list[i].style.display ="none";
        }
    }
}
     

