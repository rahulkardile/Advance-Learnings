import express, { query } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4"
import bodyParser from "body-parser";
import cors from 'cors'
import axios from "axios";

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type Todo {
            id: ID!
            title: String!
            completed: Boolean
        },
        
        type Query {
            getTodos: [Todo]
        }
        
        `,
        resolvers: {
            Query: {
                getTodos: async()=>  (await axios.get("https://jsonplaceholder.typicode.com/todos")).data }
        },
    });

    app.use(bodyParser.json())
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(3300, () => console.log(`server is running`));
}

startServer();