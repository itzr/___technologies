Build an image from a Dockerfile: `docker build [OPTIONS] PATH | URL | -`

Run a command in your new container (generic): `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

Run your image as a container: `docker run --publish 8000:8080 --detach --name [IMAGE_REF] [IMAGE_NAME:TAG]`
* example: `docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0`
* --publish: asks Docker to forward traffic incoming on the host’s port 8000 to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
* --detach: asks Docker to run this container in the background
* --name: specifices a name with which you can refer to your container in subsequent commands, in the case [bb]

* Note -
	- Use: 'docker images' 
 	- Windows: The docker images, they are stored inside the docker directory: /var/lib/docker/ images are stored there.
	- Mac: On a Mac, the default location for Docker images is:  ~/Library/Containers/com.docker.docker/Data/vms/0/.
	- (https://buildvirtual.net/where-are-docker-images-stored/)

## Helpful Commands
`docker images`
`docker info`
`docker info | grep "Docker Root Dir"`
