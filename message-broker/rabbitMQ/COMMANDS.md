# Get Started
get started: `docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management`
check: `docker logs rabbitmq`
# Hello World (node)
list queues: `sudo rabbitmqctl list_queues`
debug acknowledgements `sudo rabbitmqctl list_queues name messages_ready messages_unacknowledged`
