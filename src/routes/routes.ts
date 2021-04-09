import {Router} from 'express';

import {createTodos, getTodos} from '../controllers/controller';

const router = Router();

router.post('/', createTodos);

router.get('/',getTodos);

router.patch('/:id');

router.delete('/:id');

export default router;
