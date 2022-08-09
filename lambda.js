const awsServerlessExpress = require('aws-serverless-express');
const server = require('./dist/apps/portfolio/server/main').app();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

console.log('event SHIT -> ', server.use);

let serverProxy
try {
  server.use(awsServerlessExpressMiddleware.eventContext());
  serverProxy = awsServerlessExpress.createServer(server);
} catch (e) {
  console.log(e);
}
console.log('event SHITsss');
module.exports.ssrserverless = (event, context) => {
  console.log('event');
  return awsServerlessExpress.proxy(serverProxy, event, context);
}
