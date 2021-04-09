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