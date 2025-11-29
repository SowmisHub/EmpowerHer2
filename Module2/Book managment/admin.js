let books=[]
let IMAGE_URL="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
function addBook(){
    let title=document.getElementById("title").value.trim();
    let author=document.getElementById("author").value.trim();
    let category=document.getElementById("category").value;

    if(!title || !author){
        alert("Please fill all fields!");
        return;
    }

    let book={
        title,
        author,
        category,
        imageUrl:IMAGE_URL
    }
    books.push(book)
    renderBooks(books);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
}

function renderBooks(bookList){
    let container=document.getElementById("booksContainer");
    container.innerHTML=""

    bookList.forEach((book,index) => {
        let card=document.createElement("div");
        card.className="card";

        let title=document.createElement("h3")
        title.textContent=book.title;

        let author=document.createElement("p");
        author.innerHTML = "<strong>Author: </strong>" + book.author;
       

        let category=document.createElement("p");
        category.innerHTML="<strong>Category: </strong>"+book.category;

        let img=document.createElement("img");
        img.src=book.imageUrl;

        let deleteBtn=document.createElement("button");
        deleteBtn.className='deleteBtn';
        deleteBtn.textContent='Delete';

        deleteBtn.addEventListener("click", function(){
            deleteBook(index)
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author)
        card.appendChild(category)
        card.appendChild(deleteBtn)

        container.appendChild(card)
        

    });
}

function deleteBook(index){
    books.splice(index, 1);
    renderBooks(books)
}

function sortBooksAZ(){
    books.sort((a,b)=>a.title.localeCompare(b.title));
    renderBooks(books)
}

function sortBooksZA(){
    books.sort((a,b)=>b.title.localeCompare(a.title));
    renderBooks(books)
}

function filterBooks(){
    let category=document.getElementById("filterCategory").value;

    if(category==="All"){
        renderBooks(books);
        return;
    }
    let filtered=books.filter(book=>book.category===category);
    renderBooks(filtered)
}