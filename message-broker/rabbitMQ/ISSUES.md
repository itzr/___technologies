## Using Docker

TL;DL: amqp://rabbitmq:5672 = <protocol>://<container_name>:<exposed_port>

If both node app and the rabbitmq run on separate docker containers, 
they rely on docker networking to reach each other, 
so node app looks for a rabbitmq instance in the same container, 
which isn't the case.

RabbitMQ contanier has the port 5672 exposed with a link, 
which can be reached over the name of the container (according 
to the standards of docker compose), which means all the exposed 
ports of that container are available at rabbitmq:. 

If you change:

amqp.connect('amqp://localhost:5672');

Into

amqp.connect('amqp://rabbitmq:5672');

You're all good.



