### General Sources:
- bind mount in Linux: https://backdrift.org/how-to-use-bind-mounts-in-linux
- bind mount in docker: https://docs.docker.com/storage/bind-mounts/
- volumes in docker: https://docs.docker.com/storage/volumes/
- what is a bind mount: https://unix.stackexchange.com/questions/198590/what-is-a-bind-mount

### Examples

Source: https://prometheus.io/docs/prometheus/latest/installation/

## Bind Mount (example)

```bash
docker run \
    -p 9090:9090 \
    -v /tmp/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
```

## Volume (example)

```bash
docker run \
    -p 9090:9090 \
    -v /path/to/config:/etc/prometheus \
    prom/prometheus
```
