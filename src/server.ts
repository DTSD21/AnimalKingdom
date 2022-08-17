import express from "express";
import { getObject, getAllObjects, saveObject, logger } from "./api.controller";
//import {listOfAnimals} from "animals";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(logger);

app.get("/api", getAllObjects);
app.get("/api:id", getObject);
app.post("/api", saveObject);

app.listen(3000, () => {
console.log("Server is running on: http://localhost:3000");
});