Guides & References: https://docs.konghq.com/2.1.x/getting-started/introduction/
^^ THESE GUIDES ARE NOT RELEVANT ^^

Use these guides instead: https://github.com/Kong/kubernetes-ingress-controller/tree/main/docs/guides

# Why Kong?

*"Easy to maintain" was stated as the key factor in picking Kong.*

# The Basic Idea

API Layer.

Database abstraction with routing and plugin management.

Provides a flexible abstraction layer that 
securely manages communication between 
clients and microservices via API.

# Features

Kong Service: Upstream APIs and Microservices it manages

# Configuration (Admin)

Kong exposes a RESTful Admin API on port :8001.
Kong’s configuration including adding Services and Routes, 
is made via requests on that API.

Regarding the chart, by default, the Admin API of Kong is not exposed as a Service. 
This can be controlled via `admin.enabled` and `env.admin_listen` parameters.

# Querks

Kong Helm Chart contains two Pods:                            
    - Ingress Controller (default)
    - Proxy
   
Only the Proxy contains the `kong` clt.
