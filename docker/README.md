# NOTE

DEPRECATED AND NO LONGER MAINTAINED

PLEASE GO TO /cloud


#################### BASIC START UP #################################

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

############### KEEP A CONTINER RUNNING ############################

Option 1: Run with bin/bash or bin/sh

`docker run -it -d <image> /bin/bash`

Option 2: Use foreground mode (-t, -i or -it), can be with detached (-d)

`docker run -t -d <image>` (bash will wait in the background)

* Note for /bin/sh OR is not working:

 `docker run --entrypoint "/bin/sh" -it <image>`

* -t: Allocate a psuedo-TTY: A passive driver for users to interact with the terminal. Handles basic line editing and session management. (http://www.linusakesson.net/programming/tty/index.php)
* -i: Keep STDIN open even if not attached. STDIN is a 'Standard stream. These are interconnected input and output communication channels between a computer program and it's environment when it begins execution. Whena command is executed via an interative shell, the steams are typically connected to a text terminal on which the shell is running, but can be changed with redirection or a pipeline. (https://en.wikipedia.org/wiki/Standard_streams)
* -it



################ HELPFUL COMMANDS ####################################
`docker images`
`docker info`
`docker info | grep "Docker Root Dir"`
