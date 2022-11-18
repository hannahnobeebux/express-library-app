//TESTING THAT JS FILE IS LINKED
//alert("hello world")




// const Book  = require("../models/Book")

// import Book from "../models/book.model"

//can't access data from backend in the front-end 

//this is the container i will be appending it to
const choosingBookSection = document.getElementById('choosing-a-book')

// const enteringName = document.getElementById('entering-name')
// const submitNameButton = document.getElementById('submitting-name')



// const tbrList = document.getElementById('tbr-list')
// const readingList = document.getElementById('reading-list')
// const readList = document.getElementById('read-list')





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


let bookTitleDropdown = document.querySelector("#dropdown-menu-book")
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

// tbrButton.addEventListener("click", async () => {
//     const response = 
// })


displayBooks()
displayUsers()

//GETTING THE DATA INPUTTED BY THE USER AND DISPLAYING ONTO WEB PAGE 
const chosenBook = document.getElementById("chosen-book")

const tbrButton = document.getElementById('tbr-list')
const readingButton = document.getElementById('reading-list')
const readButton = document.getElementById('read-list')

const userName = document.getElementById("dropdown-menu-user")
const bookTitle = document.getElementById('dropdown-menu-book')
const rating = document.getElementById('rating')

const img = document.createElement('img')
img.classList.add("firstImage")
img.setAttribute('src', 'https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif')


const img2 = document.createElement('img')
img2.classList.add("secondImage")
img2.setAttribute('src', 'https://media.giphy.com/media/l2Je66zG6mAAZxgqI/giphy.gif')



tbrButton.addEventListener("click",  (event) => {
    event.preventDefault()
    console.log(userName.value, bookTitle.value)
    fetch(`/update`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            name: userName.value,
            book: bookTitle.value, 
            status: "tbr", 
            rating: rating.value
            // status: tbrButton.value
        })})
    .then(res => res.json())
    .then((result)=> {
        if (!rating.value) {
            rating.value = "rating-not-provided"
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Try giving a rating next time!`
        } 
        console.log(result)
        // chosenBook.appendChild(img2)
        chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list!`
        chosenBook.appendChild(img)
        })
    })

readingButton.addEventListener("click",  (event) => {
    event.preventDefault()
    console.log(userName.value, bookTitle.value)
    fetch(`/update`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            name: userName.value,
            book: bookTitle.value, 
            status: "reading", 
            rating: rating.value
        })})
    .then(res => res.json())
    .then((result)=> {
        if (!rating.value) {
            rating.value = "rating-not-provided"
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Try giving a rating next time!`
        } 
        console.log(result)
        // chosenBook.appendChild(img2)
        chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list!`
        chosenBook.appendChild(img)
        })
    })

readButton.addEventListener("click",  (event) => {
    event.preventDefault()
    console.log(userName.value, bookTitle.value)
    fetch(`/update`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            name: userName.value,
            book: bookTitle.value, 
            status: "reading", 
            rating: rating.value
            // status: tbrButton.value
        })})
    .then(res => res.json())
    .then((result)=> {
        //IF THE RATING IS NOT DEFINED, ADD "rating-not-provide" TO THE TABLE AND SEND A DIFFERENT MESSAGE TO THE USER 
        if (!rating.value) {
            rating.value = "rating-not-provided"
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Try giving a rating next time!`
        } 
        console.log(result)
        // chosenBook.appendChild(img2)
        chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list and giving it a rating of ${result.rating}!`
        chosenBook.appendChild(img)
        })


        // fetch(`/update`, {
        //     method: "GET", 
        //     headers: myHeaders,
        // })
    })

// readButton.addEventListener("click", (event) => {
//     event.preventDefault()
//     try {
//         const res = await fetch 
//     } catch (error) {
        
//     }
// })




const submitButton = document.getElementById('submitting-book')
submitButton.addEventListener("click", () => {
    console.log("hello")

})




// tbrButton.addEventListener("click", () => {
//     const name = userName.value 
//     console.log(name)
// })

// function chooseStatus () {
//     const response = fetch('/update')
// }







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

