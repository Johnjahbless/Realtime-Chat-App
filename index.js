const { PubSub } = require('graphql-subscriptions');
const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const pubsub = new PubSub();

const server = new GraphQLServer({ typeDefs, resolvers, context: {pubsub}});
mongoose.connection.once('open', () => 
    server.start(() => console.log('Server is running')))
