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

** If you use the shell form of the CMD, then the <command> will execute in /bin/sh -c:

** If a user specifies arguements to 'docker run', then they will override the default specified in CMD.

### LABEL

'LABEL <key>=<value> <key>=<value> <key>=<value> ...'

Adds metadeta to an image

To view a images labels, use: 'docker image inspect --format='' myimage'

### EXPOSE

'EXPOSE <port> [<port>/<protocol>...]'

Informs Docker that the container listens on the specified network ports at runtime. Can specify whether the port listens on TCP or UDP. Default TCP.

* Does not actually publish the port. Functions as documentation only. To publish the port, use the -p flag on 'docker run' to publish and map. or -P to publish all exposed ports and map them to high-order ports.

*** To set up port redirection on the host system, see using the -P flag. The docker network command supports creating networks for communication among containers without the need to expose or publish specific ports, because the containers connected to the network can communicate with each other over any port. For detailed information, see the overview of this feature.

### ENV

'ENV <key> <value>'
'ENV <key>=<value>...'

Sets the envs. 

Used in all subsequent build instructions.

*Like command line parsing, quotes and backslashes can be used to include spaces within values.

'ENV myName="John Doe" myDog=Rex\ The\ Dog \
    myCat=fluffy'

To view values: 'docker inspect'
To change them 'docker run --env <key>=<value>'
    
### ADD

'ADD [--chown=<user>:<group>] <src>... <dest>'
'ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]'

* chown feature is Linux containers only

Copies new files, directories or remote file URLs from <src> and adds them to the filesystem of the image at the path <dest>.

* dest path is absolute or relative to WORKDIR

### COPY

same as ADD. Less powerful since ADD: 
a) allows <src> to be a URL
b) recongizes and unpacks compression formats

* best practice, use COPY when the extra ADD features are not required.

### ENTRYPOINT

Exec Form: 'ENTRYPOINT ["executable", "param1", "param2"]'
Shell Form: 'ENTRYPOINT command param1 param2'

Allows you to configure a container that will run as an executable.

```For example, the following starts nginx with its default content, listening on port 80:

$ docker run -i -t --rm -p 80:80 nginx

Command line arguments to 'docker run <image>' will be appended after all elements in an exec form ENTRYPOINT, and will override all elements specified using CMD. This allows arguments to be passed to the entry point, i.e., docker run <image> -d will pass the -d argument to the entry point. You can override the ENTRYPOINT instruction using the docker run --entrypoint flag.

The shell form prevents any CMD or run command line arguments from being used, but has the disadvantage that your ENTRYPOINT will be started as a subcommand of /bin/sh -c, which does not pass signals. This means that the executable will not be the container’s PID 1 - and will not receive Unix signals - so your executable will not receive a SIGTERM from docker stop <container>.

Only the last ENTRYPOINT instruction in the Dockerfile will have an effect.```

*If you need to write a starter script, you can ensure that the final executable receives the Unix signals by using exec and gosu commands

### VOLUME

'VOLUME ["/data"]'

Creates a mount point with a specified name and market it as holding externally mounted volumes from native host or other containers.

* define the value as a JSON array ["/var/log"]

'docker run' initializes the newly created volume with any data that exists in the specifie location within the base image.

For Example:

```
FROM ubuntu
RUN mkdir /myvol
RUN echo "hello world" > /myvol/greeting
VOLUME /myvol
```

Results in an image that causes 'docker run' to create a new mount point at /myvol and copy the greeting file into the newly created  volume.

*To preserve image portability, you cannot mount a host directory from within the DockerFile. You must specifc the mountpoint when you create or run the container.

More: https://docs.docker.com/storage/volumes/

### USER

'USER <user>[:<group>]'

### WORKDIR

'WORKDIR /path/to/workdir'

Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instruction that follows.

Can be used multiple times, will be relative to the previous path.

```
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd 
```
Would output: /a/b/c

* Can resolve ENV variables previously set.

```
ENV DIRPATH /path
WORKDIR $DIRPATH/$DIRNAME
RUN pwd
```
Would output: /path/$DIRNAME

### ARG

'ARG <name>[=<default value>]'

Variable user can pass at build-time to builder using ' --build-arg <varname>=<value>'


### ONBUILD

'ONBUILD <INSTRUCTION>'

Adds to the image a trigger instruction to be executed at a later time (when the image is used as the base for another build) 

Trigger executed in the context of the downstream build.

Executed as if immediately after the downstream FROM instruction.

Any build instruction can be registered as a trigger.

##### ONBUILD: Use cases:
1 - Application build environment
2 - Daemon which may be customized with user-specific configuration.

##### ONBUILD: Case study:
Image = Reusable Python Application Builder
Requires:
- application source code in a particular directory
- build script to be called after that.

*Cannot call ADD and RUN because you do not yet have access to the application source code.

Solution 1 (inefficient, error-pront) = Provide devs with a boilerplate Dockerfile to C&P into their app.

Solution 2: Use ONBUILD to register advance instructions to run later, during the next build stage.

##### ONBUILD: How it works

1. When ONBUILD encountered. Builder adds a trigger to the image metadata of the current build (no other effect)
2. At the end of image build. All triggers stored in image manifest,  under the key OnBuild. Inspect with 'docker inspect'
3. Later the image can be used as a base for a new build, useing FROM.
	- As part of processing the FROM, downstream builder looks for ONBUILD triggers. Executes them in the same order that they were registered. 
4. Triggers are cleared from the image

##### ONBUILD example:

ONBUILD ADD . /app/src
ONBUILD RUN /usr/local/bin/python-build --dir /app/src

### STOPSIGNAL

'STOPSIGNAL signal'

Instructs container to exit

### HEALTHCHECK

The HEALTHCHECK instruction has two forms:

    HEALTHCHECK [OPTIONS] CMD command (check container health by running a command inside the container)
    HEALTHCHECK NONE (disable any healthcheck inherited from the base image)

The HEALTHCHECK instruction tells Docker how to test a container to check that it is still working.

### SHELL

SHELL ["executable", "parameters"]

The SHELL instruction allows the default shell used for the shell form of commands to be overridden. The default shell on Linux is ["/bin/sh", "-c"], and on Windows is ["cmd", "/S", "/C"]. The SHELL instruction must be written in JSON form in a Dockerfile.

Example: 

```
FROM microsoft/windowsservercore

# Executed as cmd /S /C echo default
RUN echo default

# Executed as cmd /S /C powershell -command Write-Host default
RUN powershell -command Write-Host default

# Executed as powershell -command Write-Host hello
SHELL ["powershell", "-command"]
RUN Write-Host hello

# Executed as cmd /S /C echo hello
SHELL ["cmd", "/S", "/C"]
RUN echo hello
```


##### CMD vs. ENTRYPOINT

Both CMD and ENTRYPOINT instructions define what command gets executed when running a container. There are few rules that describe their co-operation.

    Dockerfile should specify at least one of CMD or ENTRYPOINT commands.

    ENTRYPOINT should be defined when using the container as an executable.

    CMD should be used as a way of defining default arguments for an ENTRYPOINT command or for executing an ad-hoc command in a container.

    CMD will be overridden when running the container with alternative arguments.

