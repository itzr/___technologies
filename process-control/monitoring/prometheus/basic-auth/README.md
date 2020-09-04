# NOTE

- prometheus running inside nginx container
- When I `curl --head http://localhost:12321` I get an empty response from the server

**STILL NOT SURE WHY THIS IS HAPPENING**

# Basic Auth
##### Securing Prometheus API and UI Endpoints using Basic Auth

Prometheus **does not** directly support basic auth for connections to:
- The Prometheus expression browser
- HTTP API

To enforce basic auth:
- Use Prometheus in conjunction with a **reverse proxy** (e.g. nginx)
- Apply authentication at the proxy layer
