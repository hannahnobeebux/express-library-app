
const { it } = require("node:test");

const db = require("../db/db");
const { User, Book } = require("../models");

describe("User", ()=>{
    it("returns all users in the table", () => {
        const allUsers = User.findAll()
        expect(allUsers.length).toBe(5)
    }) 
})