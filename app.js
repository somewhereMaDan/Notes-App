let addBtn = document.getElementById('addBtn');
showNotes();

addBtn.addEventListener('click', ()=>{
  let addText = document.getElementById('addText');
  let addTitle = document.getElementById('addTitle');

  let notes = localStorage.getItem('notesID'); // notesID is the key for localStorage

  if(notes == null){
    notesObj = []; // creating a array here namesd notesObj
  }else{
    notesObj = JSON.parse(notes); // if the array have some values in it, then it will parse the values and put it in notesObj
    // it is now array of objects
  }
  let myObj = {
    title: addTitle.value,
    text: addText.value
  };

  notesObj.push(myObj); // pushing the object in the array
  addText.value = '';
  addTitle.value = '';
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
      <h5 class="card-title">${element.title} </h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-danger">Delete Note</button>
      </div>
    </div>`;
  });

  if(notesObj.length != 0){
    document.getElementById('notes').innerHTML = html; // this notes id the id of the div in the html file which we are using to show the notes below
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

  notesObj.splice(index,1); // from the index, delete 1 element (like in first iteration index will be 0, so it will delete the first element)
  localStorage.setItem('notesID',JSON.stringify(notesObj));
  showNotes(); // to show the notes after deleting
}


let search = document.getElementById('searchTxt');
search.addEventListener('input', ()=>{
  let inputVal = search.value;
  console.log(inputVal);
  let notecards = document.getElementsByClassName('notecard');
  Array.from(notecards).forEach((item)=>{ // going through all the cards and checking if the title of the card matches the input value
    let cardTitle = item.getElementsByTagName('h5')[0].innerText; // grabbing the first h5 tag, by index 0 and then grabbing the innerText of it
    if(cardTitle.includes(inputVal)){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
});