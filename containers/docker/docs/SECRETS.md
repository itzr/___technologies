## Docker secret create (2 variations)
`docker secret create <KEY> <path/to/value>`
OR (The last argument is set to -, which indicates that the input is read from standard input.)
`printf "This is a secret" | docker secret create my_secret_data -`
AND
`openssl rand -base64 20 | docker secret create mysql_password -`
## Docker Basic
1: `printf "This is a secret" | docker secret create my_secret_data -`
2: `docker service  create --name redis --secret my_secret_data redis:alpine`
3: `docker service ps redis`
4: `docker ps --filter name=redis -q`
5: `docker container exec $(docker ps --filter name=redis -q) ls -l /run/secrets`
6: `docker container exec $(docker ps --filter name=redis -q) cat /run/secrets/my_secret_data`
7: `docker commit $(docker ps --filter name=redis -q) committed_redis`
8 (should fail): `docker run --rm -it committed_redis cat /run/secrets/my_secret_data`
9: `docker secret ls`
10 (should fail if in use): `docker secret rm my_secret_data`
11: `docker service update --secret-rm my_secret_data redis`
*after 11, run 3&4 -> 4 will fail
## Docker Intermediate



# Docker (plain)
To inject env variables: 
`docker run -e key=value key2=value2` or  `docker run --env-file`
# Docker swarm
Note: Docker secrets are only available to swarm services, 
not to standalone containers. To use this feature, consider 
adapting your container to run as a service. Stateful containers 
can typically run with a scale of 1 without changing the 
container code.

### Commands

```
    docker secret create
    docker secret inspect
    docker secret ls
    docker secret rm
    --secret flag for docker service create
    --secret-add and --secret-rm flags for docker service update
```
