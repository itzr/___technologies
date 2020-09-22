https://istio.io/latest/docs/concepts/traffic-management/

# What is it
- Routing rules
- Control flow of traffic and API calls between services
- Relies on Envoy proxies.
- All traffic in the mesh is proxied through Envoy.
- Istio's traffic management API is specified using Kubernetes custom resource definitions (CRDs)

# Automatically Handled Requirements
- Handled by Istio in Kubernetes clusters
    - Istio needs to know where all the endpoints are, and which service they belong to.
    - To populate its own **service registry**, Istio connects to a **service discovery mechanism**
    - Using this service registry, the Envoy proxies can direct traffic to relevant services
    - Basic service discovery + load balancing = a working service mesh

# Traffic Management API Resources
- Virtual services (core)
- Destination rules (core)
- Gateways    
- Service entries    
- Sidecars

### Virtual services (core)

Configure **how requests are routed to a service** within an Istio service mesh

### Destination rules (core)

Use destination rules to configure what happens to traffic for a given destination.

### Gateways   

Use a gateway to manage inbound and outbound traffic. 
Specify which traffic you want to enter or leave the mesh.
 
### Service entries  

Using service entries allows you to manage traffic for services running out of the mesh
(I wonder if this would work for cronjobs?)
  
### Sidecars

Use sidecars to:
 - define ports and protocols an Envoy proxy accepts. 
 - limit the set of services an Envoy proxy can reach.

### Additional
- Timeouts
- Retries
- Circuit breakers
- Fault Injection
