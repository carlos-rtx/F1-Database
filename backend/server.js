import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor vivo, por ahora...");
});

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));