import express from 'express';

export const graphqlResolver = {   
    hello(){
        return {
            text: "its awesome to learn graphQl",
            views: 1234
        };
    },
    getData(){
        return {
            text:"Learning graphql is a fun",
            views: 6265
        };
    }
};