import "dotenv/config";
import "reflect-metadata";
import "./database";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { TransactionResolver } from "./resolvers/Transaction/TransactionResolver";
const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const schema = await buildSchema({ resolvers: [TransactionResolver] });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
