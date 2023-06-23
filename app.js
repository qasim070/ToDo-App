function addData(){
    
    let data = document.getElementById("toDo");
    // debugger
    if(data.value.trim() == ""){
        alert("Value can not be empty");
      
    }else{
    
        let ul = document.getElementById("list");
        let createLi =  document.createElement("li");
        let createP =  document.createElement("p");
        createLi.setAttribute("id", "liText");
        ul.appendChild(createLi);
        createLi.appendChild(createP);
        createP.appendChild(document.createTextNode(data.value));
        
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
    e.parentNode.style.opacity = '0';
    e.parentNode.style.backgroundColor = "#BD162C";
    e.parentNode.style.color = "#fff";
    
    if (confirm("Are you sure you want to delete? " + e.parentNode.firstChild.innerHTML)) {
        setTimeout(() => e.parentNode.remove(), 1000);
        // e.parentNode.remove();
    }
}

function update(u){
    let newVal = u.parentNode.firstChild;
    let oldVal = newVal.innerHTML;
    let newText = prompt("Enter the new text" , oldVal);
    // if(newText.trim() !== ""){
    //     newVal.innerHTML = newText;
    // }else{
    //     alert("Please enter any value");
    // }

    // alert(u.parentNode.textContent);
    newText.trim() !== "" ? newVal.innerHTML = newText : alert("Please enter any value");    
}

