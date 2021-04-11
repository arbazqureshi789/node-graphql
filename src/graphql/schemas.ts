import {buildSchema} from 'graphql';

export const graphqlSchema = buildSchema(`

    type newType {
        text: String!
        views: Int!
    }
    type rootQuery {
        hello : newType!
        getData: newType!
    }

    schema {
        query: rootQuery
    }

`);
