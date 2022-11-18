//NOTE - can't access data from backend in the front-end 


//OLD CODE - ACCESSING AN ELEMENT TO APPEND A RESPONSE DEPENDING ON USER INPUT 
// const enteringName = document.getElementById('entering-name')
// const submitNameButton = document.getElementById('submitting-name')

//NEEDED CODE - FOR THE FETCH 
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


//OLD CODE - DISPLAYING A USER'S NAME FROM THE INPUT WHEN A BUTTON IS CLICKED 
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


//DROPDOWN MENU FUNCTION FOR BOOK - USING DATA FROM DATABASE 
let bookTitleDropdown = document.querySelector("#dropdown-menu-book")
function createBookItem(book) {
    let listItem = document.createElement('option') 
    let bookTitle = book.title 
    listItem.textContent = bookTitle
    listItem.value = bookTitle
    //OLD METHOD - CREATING EACH DROP DOWN OPTION AS A BUTTON
    // let button = document.createElement('button')
    // button.innerHTML = bookTitle
    // button.type = 'button'
    // (listItem).append(button)

    return listItem
}

//DROPDOWN MENU FUNCTION FOR USER - USING DATA FROM DATABASE 
let userDropdown = document.querySelector('#dropdown-menu-user')
function createUser(user){
    let listItem = document.createElement('option')
    let userName = user.firstName
    listItem.textContent = userName 
    listItem.value = userName
    return listItem
}

//USING DROPDOWN MENU FOR BOOKS 
async function displayBooks() {
    const response = fetch("./books")

    .then(res => res.json())
    .then((data) => {

        data.forEach(book => bookTitleDropdown.appendChild(createBookItem(book)))
    })

    return response
}

//USING DROPDOWN MENU FOR USERS 
async function displayUsers(){
    const response = fetch('./users')
    .then(res => res.json())
    .then((data) => {
        data.forEach(user => userDropdown.appendChild(createUser(user)))
    })
    return response
}

//RUNNING THE FUNCTIONS THAT WILL POPULATE DROP DOWN MENUS 
displayBooks()
displayUsers()

//GETTING THE DATA INPUTTED BY THE USER AND DISPLAYING ONTO WEB PAGE 
//IMPORTING/REQUIRING ALL THE NECESSARY HTML ELEMENTS 
const chosenBook = document.getElementById("chosen-book")

const tbrButton = document.getElementById('tbr-list')
const readingButton = document.getElementById('reading-list')
const readButton = document.getElementById('read-list')

const userName = document.getElementById("dropdown-menu-user")
const bookTitle = document.getElementById('dropdown-menu-book')
const rating = document.getElementById('rating')

//CREATING GIF 1
const img = document.createElement('img')
img.classList.add("firstImage")
img.setAttribute('src', 'https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif')

//CREATING GIF 2
const img2 = document.createElement('img')
img2.classList.add("secondImage")
img2.setAttribute('src', 'https://media.giphy.com/media/l2Je66zG6mAAZxgqI/giphy.gif')


//1 - TBR BUTTON EVENT LISTENER 
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
    .then(res => {
        return res.json()
    })
    .then((result)=> {
        if(result.err) {
            window.alert(result.err)
            return 
        }
        if (result.rating === "rating-not-provided") {
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Please give ratings when you can!`
        }  else {
            console.log(result)
        // chosenBook.appendChild(img2)
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list and giving it a rating of ${result.rating === "rating-not-provided" ? "no rating": result.rating}!`
        }
        chosenBook.appendChild(img)
        
        })
    })

//2 - READING BUTTON EVENT LISTENER 
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
        if(result.err) {
            window.alert(result.err)
            return 
        }
        if (result.rating === "rating-not-provided") {
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Please give ratings when you can!`
        } else {
            console.log(result)
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list and giving it a rating of ${result.rating === "rating-not-provided" ? "no rating": result.rating}!`
        }
        chosenBook.appendChild(img)
        })
    })

//3 - READ BUTTON EVENT LISTENER 
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
        })})
    .then(res => res.json())
    .then((result)=> {
        if(result.err) {
            window.alert(result.err)
            return 
        }
        //IF THE RATING IS NOT DEFINED, HAS DEFAULT --> "rating-not-provided" TO THE TABLE AND SEND A DIFFERENT MESSAGE TO THE USER 
        if (result.rating === "rating-not-provided") {
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list. Please give ratings when you can!`
        } else {
            console.log(result)
            chosenBook.textContent = `Thank you ${result.user} for adding ${result.book} to your ${result.status} list and giving it a rating of ${result.rating === "rating-not-provided" ? "no rating": result.rating}!`
        }
        chosenBook.appendChild(img)
        })


    })

//OLD CODE FOR TESTING - MAKING SURE EVENT LISTENERS WORK
const submitButton = document.getElementById('submitting-book')
submitButton.addEventListener("click", () => {
    console.log("hello")

})


//PREVIOUS CODE THAT HELPED ME IN DEVELOPMENT 
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

// tbrButton.addEventListener("click", () => {
//     const name = userName.value 
//     console.log(name)
// })

// function chooseStatus () {
//     const response = fetch('/update')
// }

