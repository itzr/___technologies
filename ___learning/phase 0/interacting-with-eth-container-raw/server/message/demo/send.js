const amqp = require('amqplib/callback_api');

const { serverURL } = require('docker/__code/interacting-with-eth-container-raw/server/config/rabbitMQ-config.json');

amqp.connect(serverURL, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    // we create a channel, which is where most of the API
    // for getting things done resides:
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        // To send, we must declare a queue for us to send to;
        // then we can publish a message to the queue:
        // Declaring a queue is idempotent - it will only be
        // created if it doesn't exist already. The message
        // content is a byte array, so you can encode
        // whatever you like there.
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 500);
});

