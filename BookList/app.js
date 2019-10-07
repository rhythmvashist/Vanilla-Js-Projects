function Book(title,author,isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn; 
}

function UI(){}

UI.prototype.addbooktolist=function(book){
  const booktable=document.getElementById('book-list');

  const row=document.createElement('tr');
  // insert cold
  row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td class="delete" href="#">X</td>
  `;
  booktable.appendChild(row);
}


UI.prototype.clearFields=function(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
}

UI.prototype.showAlert=function(message,classname){
  console.log('alet');
  const div=document.createElement('div');
  div.classname=`alert ${classname}`;

  const tmes=document.createTextNode(message);
  div.appendChild(tmes);
  // get paret 
  const parent=document.querySelector('.container');

  // get before element
  const form=document.querySelector('#book-from');
  parent.insertBefore(div,form);


  setTimeout(function(){
    document.querySelector('.alert').remove()
  },3000);
}


document.getElementById('book-from').addEventListener('submit',function(e){
  
  console.log('running');
  const title=document.getElementById('title').value;
  const author=document.getElementById('author').value;
  const isbn=document.getElementById('isbn').value;

  console.log(title,author,isbn);

  const bookobj = new Book(title,author,isbn);
  
  const ui=new UI();

  if(title==''||author==''||isbn==''){
    ui.showAlert('Hi whats up','error');
  }
  else{
    ui.addbooktolist(bookobj);
  }

  //clear filed
  ui.clearFields();
  
  e.preventDefault();
});

