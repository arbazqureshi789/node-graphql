import express,{Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';

import Routes from './routes/routes';


const app = express();

app.use(json());

app.use('/todos', Routes);

app.use((err: Error, req: Request, res: Response , next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(5000);