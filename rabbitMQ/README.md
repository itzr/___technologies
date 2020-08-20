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

# Topics

# RPC (Request/Reply Pattern)

