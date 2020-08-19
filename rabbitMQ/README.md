— supervisor
— supervisorD
— workers are Daemons
— js file
— bash script that calls the js file
— Not a single script running on a cronJob
— Queue (RabbitMQ) - work listening to RabbitMQ
	— separate service
	— more workers listening to the same queue.
	— 1000s message launch more workers
	— docker is not a great option.
— workers are the daemons/cronjobs (more operating system)
— dispatchers and consumers (used interchangable)
— No container orchestration
— USER & PASSWORD.
— Keep a record of jobs on the MongoDB.
— User is interact
— keep the workers scope small. 
	- main app has an endpoint to communicate with the workers.
— Where do I keep the code? Keep it in the main app.
— workers will maintain a link with RabbitMQ
— workers can be any executable.
— Asyncronous queueing systems with Node.js
— A library that abstracts away and then any queuing system.
— http://supervisord.org/
