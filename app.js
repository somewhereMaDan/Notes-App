let addBtn = document.getElementById('addBtn');

showNotes();

addBtn.addEventListener('click', ()=>{
  let addText = document.getElementById('addText');
  let notes = localStorage.getItem('notesID'); // notesID is the key for localStorage

  if(notes == null){
    notesObj = []; // creating a array here namesd notesObj
  }else{
    notesObj = JSON.parse(notes); // if the array have some values in it, then it will parse the values and put it in notesObj
  }
  notesObj.push(addText.value);
  addText.value = '';
  localStorage.setItem('notesID',JSON.stringify(notesObj)); // when we have to store in local storage, we have to convert it into a string
  showNotes();
});

// FUCNTION TO SHOW NOTES
function showNotes(){
  let notes = localStorage.getItem('notesID');
  if(notes == null){
    notesObj = [];
  }else{
    notesObj = JSON.parse(notes);
  }

  let html = ''; // intializing a variable which have free space to store the html code
  notesObj.forEach((element,index)=>{
    // array.forEach(function(currentValue, index){}
    html += `

    <div class="notecard my-2 mx-2 card" style="width: 20rem; margin-bottom: 17px;">
      <div class="card-body">
      <h5 class="card-title">Note ${index+1} </h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-danger">Delete Note</button>
      </div>
    </div>`
  });
  // <h5 class="card-title"><Title>${index+1}</Title></h5>

  if(notesObj.length != 0){
    document.getElementById('notes').innerHTML = html;
  }else{
    document.getElementById('notes').innerHTML = `<div class="notecard my-2 mx-2 card" style="width: 20rem; margin-bottom: 17px;">
    <div class="card-body">
      <p class="card-text">Add a Note to show here</p>
    </div>
  </div>`
  }
}

// FUCNTION TO DELETE 

// we are using this.id to send the id of the button to the function

function deleteNode(index){
  console.log("this is: " ,index);

  let notes = localStorage.getItem('notesID');

  notesObj.splice(index,1); // from the index, delete 1 element (in first iteration index will be 0, so it will delete the first element)
  localStorage.setItem('notesID',JSON.stringify(notesObj));
  showNotes(); // to show the notes after deleting
}

// localStorage.clear();


































// let divx = document.getElementById('div1');
// divx.addEventListener('dblclick',()=>{
//   // divx.innerText = '';
//   let textboxx = document.createElement('input');
//   textboxx.type = 'text';
//   divx.appendChild(textboxx);

  

//   let addBtn = document.createElement('button');
//   addBtn.addEventListener('click',()=>{
//     divx.innerText = textboxx.value;
//     localStorage.setItem('edited',JSON.stringify(divx.innerText));
//   });
//   addBtn.innerText = 'save';

//   divx.appendChild(addBtn);
//   // divx.innerText = textboxx.value;
//   // divx.replaceWith(textboxx.value);
// });
// // addBtn.addEventListener('click',()=>{
// //  
// // });
// localStorage.clear();

