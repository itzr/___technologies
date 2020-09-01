const amqp = require('amqplib');
const rabbitMQ = require('./../../utils/message-broker/rabbitMQ.js')
const { RABBIT_MQ_CLUSTER_IP } = require('./../../config/const.js');

/**
 * POST /api/v1/test-rabbit
 * Rabbit API example.
 */

// simulate request ids
let lastRequestId = 1;

exports.getRabbitTest = async (req, res) => {
    // save request id and increment
    let requestId = lastRequestId;
    lastRequestId++;

    // connect to Rabbit MQ and create a channel
    let connection = await amqp.connect(RABBIT_MQ_CLUSTER_IP);
    let channel = await connection.createConfirmChannel();

    // publish the data to Rabbit MQ
    let requestData = req.body.data;
    console.log("Published a request message, requestId:", requestId);
    await rabbitMQ.publishToChannel(channel, { routingKey: "request", exchangeName: "processing", data: { requestId, requestData } });

    // send the request id in the response
    res.send({ requestId })
};
