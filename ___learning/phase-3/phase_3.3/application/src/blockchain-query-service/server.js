const path = require('path');
const grpc = require('grpc');
const pino = require('pino');
const protoLoader = require('@grpc/proto-loader');

const MAIN_PROTO_PATH = path.join(__dirname, './proto/demo.proto');
const HEALTH_PROTO_PATH = path.join(__dirname, './proto/grpc/health/v1/health.proto');

const PORT = process.env.PORT;

const shopProto = _loadProto(MAIN_PROTO_PATH).degovapplication;
const healthProto = _loadProto(HEALTH_PROTO_PATH).grpc.health.v1;

const logger = pino({
  name: 'helloservice-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
});

/**
 * Helper function that loads a protobuf file.
 */
function _loadProto (path) {
  const packageDefinition = protoLoader.loadSync(
    path,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  );
  return grpc.loadPackageDefinition(packageDefinition);
}

// /**
//  * Helper function that gets currency data from a stored JSON file
//  * Uses public data from European Central Bank
//  */
function _getHelloData (callback) {
  const data = require('./data/hello.json');
  callback(data);
}

function getHelloWorld(call, callback) {
    try {
        _getHelloData(data => {
            callback(null, {message: data.HELLO})
        })
    } catch (err) {
        logger.error(`something went wrong: ${err}`);
        callback(err.message);
    }
}

/**
 * Endpoint for health checks
 */
function check (call, callback) {
  callback(null, { status: 'SERVING' });
}

/**
 * Starts an RPC server that receives requests for the
 * CurrencyConverter service at the sample server port
 */
function main () {
  logger.info(`Starting gRPC server on port ${PORT}...`);
  const server = new grpc.Server();
  server.addService(shopProto.HelloWorldService.service, {getHelloWorld});
  server.addService(healthProto.Health.service, {check});
  server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

main()
