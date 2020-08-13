### FROM 

'FROM [--platform=<platform>] <image> [AS <name>]' or 'FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]' 

Initializes a new build stage and sets the Base Image for subsequent instructions

Dockerfile must start with a FROM instruction.

* Can appear multiple times within a single DockerFile. 
	- To create multiple images
	- To use one build stage as a dependency for another

### RUN

'RUN <command>' or 'RUN ["executable","param1"] '

* command is run in a shell. On Linux /bin/sh -c. On Windows cmd /S /C

Will execute commands in a new layer on top of the current image and commit theresults 

Use \ to continue a single instructions over multiple lines.

Examples: 
"RUN /bin/bash -c 'source $HOME/.bashrc; \
echo $HOME'"

"RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'"

To use a different shell, other than 'bin/sh', use the exec form passing in the desired shell

"RUN ["/bin/bash", "-c", "echo hello"]"

* /bin/console
* /bin/sh
* /bin/bash

### CMD

Three forms
(prefered): 'CMD ["executable", "param1", "param2"]'
(as default params to entrypoint): 'CMD ["param1", "param2"]'
(shell form): 'CMD command param1 param2'

!! There can only be one CMD instruction in a DockerFile

* The main purpose of a CMD is to provide defaults for an executing container

** The exec form is parsed as a JSON array, which means that you must use double-quotes (“) around words not single-quotes (‘).



### LABEL
### EXPOSE
### ENV
### ADD
### COPY
### ENTRYPOINT
### VOLUME
### USER
### WORKDIR
### ARG
### ONBUILD
### STOPSIGNAL
### HEALTHCHECK
### SHELL
