function addData(){
    
    let data = document.getElementById("toDo");

    if(data.value == ""){
        alert("Value can not be empty");
      
    }else{
    
        let ul = document.getElementById("list");
        let createLi =  document.createElement("li");
        createLi.setAttribute("id", "liText");
        ul.appendChild(createLi);
        createLi.appendChild(document.createTextNode(data.value));
        
        // create edit button
        let createUp = document.createElement("button");
        createUp.innerHTML = "<i class='fa fa-pencil-square-o'></i>" + " Update";
        createLi.appendChild(createUp);
        createUp.setAttribute("class" , "btn btn-warning")        
        createUp.setAttribute("onclick", "update(this)")


        // create delete button
        let createDel = document.createElement("button");
        createDel.innerHTML = "<i class='fa fa-trash-o'></i>" + " Delete";
        createLi.appendChild(createDel);
        createDel.setAttribute("class" , "btn btn-danger")
        createDel.setAttribute("onclick" , "remove(this)")

        data.value = " ";
    }

}

function remove(e){
    if (confirm("Are you sure you want to delete?")) {
        e.parentNode.remove();
    }
}

function update(u){
    let newVal = u.parentNode.firstChild;
    let newText = prompt("Enter the new text");
    if(newText !== ""){
        newVal.nodeValue = newText;
    }
    // alert(u.parentNode.textContent);
}

