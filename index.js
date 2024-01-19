import express from "express";
import path from "path";
import { getGlobals } from "common-es";

const { __dirname } = getGlobals(import.meta.url);

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080);

console.log("http://localhost:8080");
