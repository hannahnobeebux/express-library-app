//TESTING THAT JS FILE IS LINKED
//alert("hello world")


// const Book  = require("../models/Book")

// import Book from "../models/book.model"

//can't access data from backend in the front-end 

//this is the container i will be appending it to
const choosingBookSection = document.getElementById('choosing-a-book')

// const enteringName = document.getElementById('entering-name')
// const submitNameButton = document.getElementById('submitting-name')

const tbrButton = document.getElementById('tbr')
const readingButton = document.getElementById('reading')
const readButton = document.getElementById('read')

// const tbrList = document.getElementById('tbr-list')
// const readingList = document.getElementById('reading-list')
// const readList = document.getElementById('read-list')

const userName = document.getElementById("username")

// const choosingBookButton = document.getElementById("dropdown-book-button")

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



// submitNameButton.addEventListener("click", () => {
//     fetch('/inputtedName',  {
//         method: "POST", 
//         headers: myHeaders,
//         body: JSON.stringify({
//             username: userName.value
//         })
//     })
//     .then(res => res.json())
//     .then(({username}) => {
//         choosingBookSection.innerHTML = username
//     })
// })

function addUsers () {

}

function addBooks () {

}

// {id, title, author, rating, description}


let bookTitleDropdown = document.querySelector("#dropdown-menu-books")
function createBookItem(book) {
    let listItem = document.createElement('option') 
    let bookTitle = book.title 
    listItem.textContent = bookTitle
    listItem.value = bookTitle
    // let button = document.createElement('button')
    // button.innerHTML = bookTitle
    // button.type = 'button'
    // (listItem).append(button)
   
    return listItem
}

let userDropdown = document.querySelector('#dropdown-menu-user')
function createUser(user){
    let listItem = document.createElement('option')
    let userName = user.firstName
    listItem.textContent = userName 
    listItem.value = userName
    return listItem
}



// const value = document.createElement('option')
// value.textContent = ""
// value.value = "test"
// bookTitleDropdown.appendChild(value)


async function displayBooks() {
    const response = fetch("./books")
    //{
        // method: "POST", 
        // headers: myHeaders,
        // body: JSON.stringify({
        //     books: await Book.findAll()
        // })

    // })
    .then(res => res.json())
    .then((data) => {
        // choosingBookSection.innerHTML = books
        // console.log(data)

        // data.forEach(book => choosingBookSection.innerHTML += book.title)

        data.forEach(book => bookTitleDropdown.appendChild(createBookItem(book)))
    })

    return response
}


async function displayUsers(){
    const response = fetch('./users')
    .then(res => res.json())
    .then((data) => {
        data.forEach(user => userDropdown.appendChild(createUser(user)))
    })

    return response
}


displayBooks()
displayUsers()

//choosingBookItem.append(createListItem(book))
// choosingBookButton.addEventListener("click", displayBooks)



// async function displayingBooks(book){
//     let listItem = document.createElement('li') 
//     let button = document.createElement('button') 
//     button.innerHTML = book
//     button.type='button'
// }

// books.forEach(book => displayingBooks(book))


// choosingBookButton.addEventListener("click", displayBooks)

