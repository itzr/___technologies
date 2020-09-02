### Requirements

See README.md

### How to

Kubernetes run on a private, isolated network

We can interact with the network via an API endpoint (or by exposing a service)

`kubectl proxy`: Creates a proxy that will forward communications into the cluster-wide, private network. Creates a connection between host (online terminal) and cluster.

`curl http://localhost:8001/version`: See all APIs hosted through the proxy endpoint.
