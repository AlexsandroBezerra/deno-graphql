import 'npm:reflect-metadata@0.1.13';
import { ApolloServer } from 'npm:@apollo/server@4.2.2';
import { startStandaloneServer } from 'npm:@apollo/server@4.2.2/standalone';

import { schema } from './schema.ts';

const PORT = 3333;
const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀 Server running at: ${url}`);
