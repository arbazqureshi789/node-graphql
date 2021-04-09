import {RequestHandler} from 'express';

import Todos from '../models/models';

const TODOS: Todos[] = [];

export const createTodos: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const todo = new Todos(Math.random().toString(), text);

    TODOS.push(todo);
    res.status(201).json({message: "Todo created successfully", createdTodo:todo});
}; 


export const getTodos: RequestHandler = (req, res, next)=>{
    if(TODOS.length === 0 ){
        res.json({message:"No todos to show"});
   }else{
       res.json({
            TODOS
       })
   }
};

export const updateTodos:RequestHandler<{id: string}> = (req, res, next)=>{
    const todoId = req.params.id
    const index = TODOS.findIndex(todo => todo.id === todoId);

    const updatedText = (req.body as {text: string}).text;

    if(index < 0){
        throw new Error("Item not found");
    }else{
        TODOS[index].text = updatedText;

        res.status(200).json({message:"Todo updated", updatedTodo: TODOS[index]});
    }

}

export const deleteTodos:RequestHandler<{id: string}> = (req, res, next)=>{
    const delId = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === delId);

    let deletedTodo;

    if(index < 0){
        throw new Error("Item not found");
    }else{
        deletedTodo = TODOS[index]; 
        TODOS.splice(index, 1);
        res.status(200).json({message:"Todo deleted", deletedTodo: deletedTodo});
    }
}