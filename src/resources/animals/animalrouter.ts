import express from "express";
import {
  createAnimal,
  deleteAnimal,
  generateId,
  getAllAnimals,
  joiValidateBody,
  updateAnimal,
} from "./animal.controller";

const animalRouter = express.Router();
animalRouter.get("/", getAllAnimals);
animalRouter.post("/", generateId, joiValidateBody, createAnimal);
animalRouter.delete("/:id", deleteAnimal);
animalRouter.put("/:id", updateAnimal);

export default animalRouter;
