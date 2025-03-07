import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import { Student } from "./entities/student"

const app = express();
app.use(cors());
app.use(express.json());

createConnection(
    // {
    //     "type": "mysql",
    //     "host": "localhost",
    //     "port": 3306,
    //     "username": "root",
    //     "password": "",
    //     "database": "studentdb",
    //     "synchronize": true,
    //     "entities": [Student]
    //   }
      
)
.then(() => {
  console.log("Connected to MySQL Database");


  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}).catch((error) => console.log(error));
