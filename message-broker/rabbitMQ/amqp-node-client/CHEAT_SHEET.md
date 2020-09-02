# CHEAT SHEET
## Work Queues (basic model)
### Flow

producer => queue => consumer (one or many)

---------------------------
- connect: `amqp.connect('amqp://localhost', function(error0, connection) {}`
---------------------------
--- inside connection ----
- create channel: `connection.createChannel(function(error1, channel) {}`
--------------------------
--- inside channel ------
- assert queue (check exists): `channel.assertQueue(queue, {})`
--------------------------
--- inside channel (producer) ------
- send to queue: `channel.sendToQueue(queue, Buffer.from(msg));`
--------------------------
--- inside channel (consumer) ------
- consume: `channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
          }, {
              noAck: true
            });`
## Publish/Subscribe (full messaging model)
### Flow

producer => exchange => queue (one or many) => consumer (one or many)
* producer doesnt send messages directly to the queue.
* exchange must know what to do with the message. rules are defined by the exchange type.
--- inside channel (producer/exchange) ------
- assert Exchange (exchange types available: direct, topic, headers and fanout):
`channel.assertExchange(exchange, 'fanout', {});` 
- publish: 
`channel.publish(exchange, '', Buffer.from(msg));`
--- inside channel (consumer/exchange) ------
- assert Exchange: <as_above>

- assert Queue (create a non-durable queue): 
`channel.assertQueue('', {
  exclusive: true
});`
- bindQueue (basic; relationship between exchange and queue: 
* Interpretation: the queue is interested in messages from this exchange
`channel.bindQueue(queue_name, 'logs', '');` 
- bindQueue (with a key):
`channel.bindQueue(queue_name, exchange_name, 'black');`
* The meaning of a binding key depends on the exchange type. 
- consume:
`channel.consume(q.queue, function(msg) {
 if(msg.content) {
     console.log(" [x] %s", msg.content.toString());
   }
}, {
 noAck: true
});`

## Routing
Receiving messages selectively




## General
close:
`setTimeout(function() { 
   connection.close(); 
   process.exit(0) 
   }, 500);
`
