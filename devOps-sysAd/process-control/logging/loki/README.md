### Summary

- Multi-tenant log aggregation system
- Horizontally-scalable, highly-available
- Does not index (only indexes metadata)
- Indexes and groups log streams. Same labels you use with Prometheus.
    - Switch between metrics and logs
    
**STACK**

A Loki-based logging stack consists of 3 components:

- promtail is the agent, responsible for 
gathering logs and sending them to Loki.

- loki is the main server, responsible for 
storing logs and processing queries.

- Grafana for querying and displaying 
the logs.

Loki is like Prometheus, but for logs: 
we prefer a multidimensional label-based approach 
to indexing, and want a single-binary, easy to 
operate system with no dependencies. 

Loki differs from Prometheus by focusing 
on logs instead of metrics, and delivering 
logs via push, instead of pull.

### Install 

with docker: `docker-compose up`
with helm (kubernetes): 
1: `helm repo add loki https://grafana.github.io/loki/charts`
2: `helm repo update`
3 (main): `helm upgrade --install loki loki/loki-stack  --set grafana.enabled=true,prometheus.enabled=true,prometheus.alertmanager.persistentVolume.enabled=false,prometheus.server.persistentVolume.enabled=false`
