const express = require("express");

const app = express();

/**
 * Método HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma iformação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar informação no back-end
 */

app.get("/projetos", (request, response) => {
  return response.json(["projeto1", "projeto2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["projeto1", "projeto2", "projeto3"]);
});

app.put("/projects/:id", (request, response) => {
  return response.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["projeto2", "projeto3"]);
});

app.listen(3333, () => {
  console.log("🚀 Beck-end started 😁");
});
