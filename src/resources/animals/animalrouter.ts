import express from "express";
import {
  createAnimal,
  deleteAnimal,
  getAllAnimals,
  joiValidateBody,
  updateAnimal,
} from "./animal.controller";

const animalRouter = express.Router();
animalRouter.get("/", getAllAnimals);
animalRouter.post("/", joiValidateBody, createAnimal);
animalRouter.delete("/:id", deleteAnimal);
animalRouter.put("/:id", updateAnimal);

export default animalRouter;
