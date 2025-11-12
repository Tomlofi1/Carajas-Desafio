import { Request, Response } from "express";
import { Tarefa } from "../models/tarefa";

let tarefas: Tarefa[] = [];
let nextId = 1;

export const TarefaController = {
    getTarefas(req: Request, res: Response){
        return res.json(tarefas);
    },

    create(req: Request, res: Response){
        const {title, description} = req.body;

        if(!title){
            return res.status(400).json({message:"Titulo obrigatório"});
        }

        const novaTarefa: Tarefa = {
            id: nextId++,
            title,
            description,
            completed: false
        };

        tarefas.push(novaTarefa);
        return res.status(201).json(novaTarefa);
    },

    update(req: Request, res:Response){
        const id = Number(req.params.id);
        const { title, completed } = req.body;

        const tarefa = tarefas.find((t) => t.id === id);

        if(!tarefa) return res.status(404).json({message: "Tarefa não encontrada"});

        if (title !== undefined) tarefa.title = title;
        if (completed !== undefined) tarefa.completed = completed;

        return res.json(tarefa);
    },

    delete(req: Request, res: Response){
        const id = Number(req.params.id);
        tarefas = tarefas.filter((t) => t.id ===id);

        return res.status(204).send();

    }
}

