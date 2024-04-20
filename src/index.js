// Add your code here
console.log("FUNCIONOU");
import express from "express";
import cors from "cors";
import { getWeather } from "./weather/service.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permite solicitações de qualquer origem
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Métodos permitidos
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Cabeçalhos permitidos
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({ working: true });
});

app.get("/weather", async (req, res) => {
  if (!req.query.name)
    return res
      .status(400)
      .send({ erro: "faltou passar o name nos parametros" });

  const data = await getWeather(req.query.name);
  return res.send(data);
});

const server = app.listen("4000");

export { app };
