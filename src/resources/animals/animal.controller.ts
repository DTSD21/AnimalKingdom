import { NextFunction, Request, response, Response } from "express";
import { animals, animalSchema } from "./animal.model";

export const createAnimal = (req: Request, res: Response) => {
  if (req.body === typeof animalSchema) {
    animals.push(req.body);
    res.status(201).json(req.body);
    return;
  } else {
    response.status(404).json("en sträng");
  }
};

export const getAllAnimals = (req: Request, res: Response) => {
  res.status(200).json(animals);
};

export const updateAnimal = (req: Request, res: Response) => {
  const indexOfObject = animals.findIndex((object) => {
    return object.id === req.params.id;
  });

  if (indexOfObject == -1) {
    res.status(404).json("Animal not found, no object changed.");
  } else {
    animals.splice(indexOfObject, 1, req.body);
    console.log(req.body);
    res.status(200).json(animals);
  }
};

export const deleteAnimal = (req: Request, res: Response) => {
  const indexOfObject = animals.findIndex((object) => {
    return object.id === req.params.id;
  });

  if (indexOfObject == -1) {
    res.status(404).json("User was not found, nothing deleted.");
  } else {
    animals.splice(indexOfObject, 1);
    res.status(204).json(null);
  }
};

export const joiValidateBody = (req: Request, res: Response, next: NextFunction) => {
  const result = animalSchema.validate(req.body);
  if (result.error) res.status(400).json(result.error.message);
  else {
    next();
  }
};
