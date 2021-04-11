import express,{Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';
import {graphqlHTTP} from 'express-graphql';
import Routes from './routes/routes';
import {graphqlSchema} from './graphql/schemas';
import {graphqlResolver} from './graphql/resolvers';

const app = express();

app.use(json());

app.use('/todos', Routes);

app.use('/graphql',graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver
}));

app.use((err: Error, req: Request, res: Response , next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(5000);