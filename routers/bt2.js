import { Router } from "express";

const bt2Router = Router();

bt2Router.get("/greet", (req, res) => {
  const name = req.query.name || "friend";
  res.json({ message: `Xin chao, ${name}!` });
})

bt2Router.get("/sum", (req, res) => {
  const a = parseInt(req.query.a, 10) || 0;
  const b = parseInt(req.query.b, 10) || 0;
  res.json({ sum: a + b });
})

export default bt2Router;