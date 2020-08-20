* version 3

The compose file is YAML file defining: 
- Services
- Networks
- Volumes

Default path: `./docker-compose.yml`

### TOP LEVEL

# SERVICE

Contains config applied to each container started for that service.
Similar to passing command-line parameters to `docker run`

# NETWORK

Analogous to `docker network create`

# VOLUME

Analogous to `docker volume create`

### DETAIL

LATER WHEN I HAVE NEED SQL..AND WEBSERVER.

#### LINKS
https://docs.docker.com/compose/compose-file/#links

- flag is a legacy feature
- containers for the linked service are reachable at ("SERVICE:ALIAS")
- links are not required for services to communicate
- express dependencies and therefore define order
- The links option is ignored when deploying a stack in swarm mode

For more: https://docs.docker.com/compose/networking/
