console.log("We are in projrct 1")
showNotes();
// ***** Add Event On Button **** //

let addBtn=document.getElementById("addBtn");


addBtn.addEventListener("click",function () {
    
    let addText=document.getElementById("addText");
    let notes=localStorage.getItem("notes");
    if (notes==null) {
       notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value="";

    showNotes();
})

function showNotes() {
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }

    let html="";

    notesObj.forEach(function (element,index) {
        
    html+=
    `<div class="mx-2 my-2 noteCard card" style="width: 18rem;">
             
    <div class="card-body">
      <h5 class="card-title">Note${index+1}</h5>
      <p class="card-text">${element}</p>
      <button id=${index} onclick=deleteNote(this.id) class="btn btn-primary">Delete Note</button>
    </div>
    </div>`
        
    });

    let notesElement=document.getElementById("notes");

    if (notesObj.length!=0) {
        notesElement.innerHTML=html;
    }
    else{
        notesElement.innerHTML=`<h3>nothing notes is added</h3>`;
    }
}


function deleteNote(index) {
 
  let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }

        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();

}

let searchTxt=document.getElementById("searchTxt");

searchTxt.addEventListener("input",function(){

  inputVal=searchTxt.value.toLowerCase();
  //console.log("Input Event listner fire",inputVal);

  let noteCard=document.getElementsByClassName("noteCard");

  Array.from(noteCard).forEach(function(element){
    let cardText=element.getElementsByTagName("p")[0].innerText;
    //console.log(cardText);

    if (cardText.includes(inputVal)) {
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  })
})