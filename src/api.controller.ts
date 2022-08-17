import { NextFunction, Request, Response } from "express";

export function getObject(req: Request<{id: string }>, res: Response) {
    console.log(req.params.id);
    res.status(200).json("Returned object successfully!");
}

export function getAllObjects (req: Request, res: Response) {
    res.status(200).json("Returned all objects successfully!");
}

export const saveObject = (req: Request, res: Response) => {
    const data = req.body;
    res.status(201).json(data);
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
}