const amqp = require('amqplib');
const { RABBIT_MQ_CLUSTER_IP } = require('./../../../config/const.js');

// WEB SERVICE
module.exports.listenForResults = async () => {
    // connect to Rabbit MQ
    let connection = await amqp.connect(RABBIT_MQ_CLUSTER_IP);

    // create a channel and prefetch 1 message at a time
    let channel = await connection.createChannel();
    await channel.prefetch(1);

    // start consuming messages
    await consume({ connection, channel });
}

// consume messages from RabbitMQ
function consume({ connection, channel, resultsChannel }) {
    return new Promise((resolve, reject) => {
        channel.consume("processing.results", async function (msg) {
            // parse message
            let msgBody = msg.content.toString();
            let data = JSON.parse(msgBody);
            let requestId = data.requestId;
            let processingResults = data.processingResults;
            console.log("Received a result message, requestId:", requestId, "processingResults:", processingResults);

            // acknowledge message as received
            await channel.ack(msg);
        });

        // handle connection closed
        connection.on("close", (err) => {
            return reject(err);
        });

        // handle errors
        connection.on("error", (err) => {
            return reject(err);
        });
    });
}
