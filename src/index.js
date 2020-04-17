const express = require("express");
const { uuid } = require("uuidv4");

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

const projects = [];

app.get("/projects", (request, response) => {
  // const query = request.query; // Para verificar os query params
  // console.log(query);

  return response.json(projects);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;

  console.log(params);
  return response.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["projeto2", "projeto3"]);
});

app.listen(3333, () => {
  console.log("🚀 Beck-end started 😁");
});
