const express = require("express");

const app = express();

app.use(express.json());

/**
 * Método HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma iformação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar informação no back-end
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: Filtro e paginação > Na url vem ?nome=value
 * Route Params: Na url, depois da barra /2
 * Request Body: JSON
 */

app.get("/projects", (request, response) => {
  const query = request.query; // Para verificar os query params
  console.log(query);

  return response.json(["projeto1", "projeto2"]);
});

app.post("/projects", (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json(["projeto1", "projeto2", "projeto3"]);
});

app.put("/projects/:id", (request, response) => {
  const params = request.params; // para pegar o id do route params

  console.log(params);
  return response.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["projeto2", "projeto3"]);
});

app.listen(3333, () => {
  console.log("🚀 Beck-end started 😁");
});
