const amqp = require('amqplib');
const { serverURL } = require('./../config/rabbitMQ-config.json');

module.exports.setup = async () => {
    /*
    SUMMARY

    - Declare an exchange “processing”
    - Declare 2 queues: “processing.requests” will store the requests and “processing.results” will store the results
    - Bind the queues to the exchange

    */
    console.log("Setting up RabbitMQ Exchanges/Queues");
    // connect to RabbitMQ Instance
    let connection = await amqp.connect(serverURL);

    // create a channel
    let channel = await connection.createChannel();

    // create exchange
    await channel.assertExchange("processing", "direct", { durable: true });

    // create queues
    await channel.assertQueue("processing.requests", { durable: true });
    await channel.assertQueue("processing.results", { durable: true });

    // bind queues
    await channel.bindQueue("processing.requests","processing", "request");
    await channel.bindQueue("processing.results","processing", "result");

    console.log("Setup DONE");
    // process.exit();
}

// utility function to publish messages to a channel
module.exports.publishToChannel = (channel, { routingKey, exchangeName, data }) => {
    return new Promise((resolve, reject) => {
        channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(data), 'utf-8'), { persistent: true }, function (err, ok) {
            if (err) {
                return reject(err);
            }

            resolve();
        })
    });
}
