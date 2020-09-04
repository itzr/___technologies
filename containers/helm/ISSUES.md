# Issues

## Porting (liveness probe failed)

- Helm by default probes port 80
- The probed port needs to be exposed by the
image. It cannot be 'exposed' in the docker-compose 
or Dockerfile since this is just for documentation.

How do you probe different ports on Helm?
    - change values.yaml or other? (see rabbitmq-ha/values.yaml:486)
    
Does helm/kubernetes probe the Local port or the the container port? (LOCAL:CONTAINER)
Does can I expose ports on nodes for probing? And is this a good idea?
