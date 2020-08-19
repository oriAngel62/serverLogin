const express = require("express");
const server = express();
// const {check, myPromise} = require('./callback_promise')

// when we use require we execute the file
const data = require("./mongodb");

//convert all the data to json
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("client"));

server.get("/users", (request, response) => {
    data.then(async (clint) => {
        const db = await clint.db("task-manger");
        db.collection("users")
            .find()
            .toArray()
            .then((result) => {
                // console.log(result)
                response.status(200).send(result);
            });
    });
});

function checkUserExsist(request, response, next) {
    let { name } = request.body;
    data.then((client) => {
        const db = client.db("task-manger");
        db.collection("users").findOne({ name }, (error, result) => {
            console.log(result, "User");
            if (result) {
                return response.status(403).send({ message: "User exsit" });
            }
            next();
        });
    });
}

server.post("/logIn", (request, response) => {
    console.log("log in");
    let { name, pass } = request.body;
    data.then((client) => {
        const db = client.db("task-manger");
        db.collection("users").findOne({ name, pass }, (error, result) => {
            //  console.log(result, 'User')
            if (result) {
                return response.status(200).send({ message: "login" });
            }
            response.status(403).send({ message: "can't find user" });
        });
    });
});

server.post("/register", checkUserExsist, (request, response) => {
    data.then((clint) => {
        const db = clint.db("task-manger");

        db.collection("users").insertOne(request.body, (error, result) => {
            if (error) {
                console.log(error);
                throw "Ahi";
            }
            response.status(200).send({ message: "User register" });
        });
    }).catch((error) => console.log(error));
});

server.delete("/delete/:name", (request, response) => {
    // console.log(request.params)
    data.then((clint) => {
        const db = clint.db("task-manger");
        db.collection("users").deleteOne(request.params, (error, result) => {
            console.log(result);
            if (error == null) {
                console.log(error);
                response.status(403).send("User not found");
            }
            response.status(200).send("Delete ok");
        });
    }).catch((error) => console.log(error));
});

server.put("/update", (request, response) => {
    console.log(request.body);
    response.status(200).send("Update ok");
});

server.listen(process.env.PORT || 5678, () => console.log("Server run"));

// module.exports=namesarr;
