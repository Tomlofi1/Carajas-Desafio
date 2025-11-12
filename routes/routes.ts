import { Router } from "express";
import { TarefaController } from "../controllers/tarefaController";

const routes = Router();

//Rota para listar todas as tarefas;
routes.get("/tasks", TarefaController.getTarefas);

//Rota para criar uma nova tarefa;
routes.post("/tasks", TarefaController.create);

//Rota para atualizar
routes.put("/tasks/:id", TarefaController.update);

//Rota para deletar uma tarefa;
routes.delete("/tasks/:id", TarefaController.delete);

export default routes;