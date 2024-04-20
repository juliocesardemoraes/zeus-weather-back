import express from "express";
const app = express();
import cors from "cors";
import { getWeather } from "./weather/service.js";

app.use(cors({}));
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
