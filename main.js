

document.getElementById("cancel-btn").addEventListener("click", function(){

    document.getElementById("input-box").value = "";

})





var count=0;
var count2 = 0;
var count3 = 0;

function doit(){


    if(document.getElementById("input-box").value==""){

        alert("Empty field not allowed");
    }

    else{

    const parentDiv = document.createElement("div");
    const textDiv = document.createElement("div");
    const btnDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const timeDiv = document.createElement("div");
    const editBtn = document.createElement("button");
    const timeDiv2 = document.createElement("div");
    

    parentDiv.className = "parent";
    textDiv.className = "list";
    btnDiv.className = "btn-div";
    deleteBtn.className = "delete-btn";
    doneBtn.className = "done-btn";
    timeDiv.className = "details-div";
     timeDiv2.className = "time-div"
    

    
    btnDiv.append(deleteBtn);
    btnDiv.append(doneBtn);
    parentDiv.append(textDiv);
    parentDiv.append(timeDiv);
    timeDiv.append(timeDiv2);
    timeDiv.append(btnDiv);
   
    // timeDiv.append(btnDiv);
    // parentDiv.append(btnDiv);

    document.getElementById("list-items").appendChild(parentDiv);

    const deleteBtnText = document.createTextNode("Delete");
    deleteBtn.append(deleteBtnText);

    const editBtnText = document.createTextNode("Edit");
    editBtn.append(editBtnText);

    const doneBtnText = document.createTextNode("Done");
    doneBtn.append(doneBtnText);

    const titleText = document.getElementById('input-box').value;

    const msgText = document.createTextNode(titleText);

    textDiv.appendChild(msgText); 

    deleteBtn.id = count;
    parentDiv.id = "p"+count;

    deleteBtn.addEventListener("click",function(){

        document.getElementById("p"+this.id).remove();
    })

    doneBtn.id = count2;
    textDiv.id = "tp"+count2;

    doneBtn.addEventListener("click", function(){

        document.getElementById("tp"+this.id).style.textDecoration = "line-through";

        document.getElementById("tp"+this.id).style.color = "grey";

    })


    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var hrs = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    if(month==0){

        month ="Jan";
    }

    const dateDetails = document.createTextNode(date+" "+month+", "+year+" | "+hrs+" : "+min+" : "+sec);

    timeDiv2.append(dateDetails);

    
    editBtn.id = count2;
    

    

    

     
    document.getElementById("input-box").value = "";
    count++;
    count2++;

}
}







    

    

    









