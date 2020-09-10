# General (how to)
- to inspect source code, follow /get-images.sh
- to inspect dockerfile process, use: `docker image history <image_id> --no-trunc`
    - It's nice to store this somewhere where it is easier to read.
- to inspect ENVs: `docker image inspect <image_id>`

# General (notes)
Seems a few, if not all of the containers run on the same port (9080)

# Ratings (nodejs) 
###### Source
- The port variable is left as an argument and fulfilled on start,
there is no default fallback.

###### Container
- Port 9080 is specified in the container build process (DockerFile)
- Service Version is set in the following order:
    ENV SERVICE_VERSION=v1 (**defines an env**)
    ARG service_version
 


