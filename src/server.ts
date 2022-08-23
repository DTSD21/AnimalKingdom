import express from "express";
import { errorHandler, logger, notFoundHandler } from "./middlewares";
import animalRouter from "./resources/animals/animalrouter";
require("express-async-errors");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/animals", animalRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => console.log("Server is running on: http://localhost:3000"));
