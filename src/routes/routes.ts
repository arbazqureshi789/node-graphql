import {Router} from 'express';

import {createTodos, getTodos, updateTodos, deleteTodos} from '../controllers/controller';

const router = Router();

router.post('/', createTodos);

router.get('/',getTodos);

router.patch('/:id',updateTodos);

router.delete('/:id',deleteTodos);

export default router;
