
const db = require("../db/db");
const { User, Book } = require("../models");

const request = require('supertest')
const app = require('../server');

describe("User", ()=>{
    it("returns all users in the table", async () => {
        const numberofUsers =  await User.count()
        expect(numberofUsers).toBe(5)
    }) 

    it("status is created", async () => {
        const response = await (await request(app).post("/update")).send({
            name: "Amy",
            book: "Pride and Prejudice", 
            status: "read", 
            rating: 1
        })
        expect(await response.status).toBe(200)
    })



// describe ("User_Book Relationship Table", () => {
//     describe("Creating entries from user input", () => {
//         it("status is created", async () => {
//             const response = await (await request(app).post("/update")).send({
//                 name: "Amy",
//                 book: "Pride and Prejudice", 
//                 status: "read", 
//                 rating: 1
//             })
//             expect(await response.status).toBe(200)
//         })
//     })
// })

    // it("testing if endpoint works", async () => {
    //     const response = await (await request(app).post("/userRouter/update")).send({

    //     })
    // })
})