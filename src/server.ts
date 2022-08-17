import express from "express";
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
})
app.use(express.static("public"));


app.get("/api", (req, res) => {
  res.status(200).json("Welcome to Animal Kingdom API using Express");
});

app.post("/api"), (req, res) => {
  const data = req.body;
  res.status(201).json()
}

app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000");
});
