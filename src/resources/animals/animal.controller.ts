import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";
import { animals, animalSchema } from "./animal.model";

export const createAnimal = (req: Request, res: Response) => {
  animals.push(req.body);
  res.status(201).json(req.body);
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
    res.status(200).json(animals);
  }
};

export const deleteAnimal = (req: Request, res: Response) => {
  const indexOfObject = animals.findIndex((object) => {
    return object.id === req.params.id;
  });

  if (indexOfObject == -1) {
    res.status(404).json("Animal was not found, nothing was deleted.");
  } else {
    animals.splice(indexOfObject, 1);
    res.status(204).json(null);
  }
};

export const generateId = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.id != null) res.status(400).json("No id:s of your own allowed!");
  else {
    req.body.id = nanoid(10);
    next();
  }
};

export const joiValidateBody = (req: Request, res: Response, next: NextFunction) => {
  const result = animalSchema.validate(req.body);
  if (result.error) res.status(400).json(result.error.message);
  else {
    next();
  }
};
