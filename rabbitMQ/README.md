# Core Features
- open source message broker

- Asynchronous messaging
    - multiple messaging protocols
    - message queueing
    - delivery acknowledgement
    - flexible routing to queues
    - multiple exchange type

- Dev Ex
    - Deploy with BOSH, Chef, Docker or Puppet.    

- Distributed Deployment
    - Deploy as clusters for high-availability and throughput
    - Federate across multiple availability zones and regions
    
- Enterprise & Cloud Ready
    - Pluggable authentication
    - Pluggable authorisation
    - Supports TLS
    - Supports LDAP
- Tools & plugins. Loads of dev tools: https://www.rabbitmq.com/devtools.html

- Management & Monitoring
    - HTTP-API
    - Command Line Tool 
    - UI for Managing and Monitoring 

## JavaScript and Node

- amqp.node: RabbitMQ (AMQP 0-9-1) client for Node.js
- rabbit.js: message patterns in node.js using RabbitMQ.
- amqp-stats: a node.js interface for RabbitMQ management statistics
- Rascal: a config driven wrapper for amqp.node supporting multi-host connections, automatic error recovery, redelivery flood protection, transparent encryption and channel pooling.


# Work Queues

The main idea behind Work Queues (aka: Task Queues) 
is to avoid doing a resource-intensive task immediately 
and having to wait for it to complete. Instead we schedule 
the task to be done later. We encapsulate a task as a message 
and send it to a queue. A worker process running in the 
background will pop the tasks and eventually execute the job. 
When you run many workers the tasks will be shared between them.

This concept is especially useful in web applications where 
it's impossible to handle a complex task during a short HTTP 
request window.

# Publish/Subscribe

Send messages to many consumers at once

# Routing

Subscribe to only a subset of messages

e.g
- direct only critical error messages to the log
- print all log messages on the console

# Topics (topic exchange)
https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html

Messages sent to a topic exchange can't have an arbitrary routing_key - it must be a list of words, delimited by dots. The words can be anything, but usually they specify some features connected to the message. A few valid routing key examples: "stock.usd.nyse", "nyse.vmw", "quick.orange.rabbit". There can be as many words in the routing key as you like, up to the limit of 255 bytes.

The binding key must also be in the same form. The logic behind the topic exchange is similar to a direct one - a message sent with a particular routing key will be delivered to all the queues that are bound with a matching binding key. However there are two important special cases for binding keys:

    * (star) can substitute for exactly one word.
    # (hash) can substitute for zero or more words.

# RPC (Remote Procedure Call; Request/Reply Pattern)

When in doubt avoid RPC. 
If you can, you should use an 
asynchronous pipeline - 
instead of RPC-like blocking, results are 
asynchronously pushed to a next computation stage.

