import express, { query } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4"
import bodyParser from "body-parser";
import cors from 'cors'
import axios from "axios";

import { Todos } from './Todos.js'
import { Users } from './Users.js'

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type User {
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
        }

        type Todo {
            id: ID!
            title: String!
            completed: Boolean
            userId: ID!
            user: User
        },
        
        type Query {
            getTodos: [Todo]
            getAllUsers: [User]
            getUser(id: ID!): User
        }
        
        `,
        resolvers: {
            Todo: {
                user: async (todo) => Users.find(e=> e.id == todo.userId), 
            },
            Query: {
                getTodos: async()=>  Todos,
                getAllUsers: async()=> Users, 
                getUser: async(parent, { id })=>  Users.find((e)=> e.id == id), 
            }
        },
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(3300, () => console.log(`server is running`));
}

startServer();