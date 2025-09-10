const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let artefactos = [];
let artefactoId = 1;

// Listar artefactos
app.get("/artefactos", (req, res) => res.json(artefactos));

// Registrar artefacto
app.post("/artefactos", (req, res) => {
  const { nombre, marca, modelo, tipo } = req.body;
  if (!nombre || !marca || !modelo || !tipo)
    return res.status(400).json({ error: "Todos los campos son obligatorios" });

  const nuevo = { id: artefactoId++, nombre, marca, modelo, tipo, fecha_registro: new Date() };
  artefactos.push(nuevo);
  res.status(201).json(nuevo);
});

app.listen(PORT, () => console.log(`✅ API corriendo en puerto ${PORT}`));
