## REASON FOR EXISTING

As on the ground microservice practitioners 
quickly realize, the majority of operational 
problems that arise when moving to a distributed 
architecture are ultimately grounded in two areas: 
**networking and observability**. 

It is simply an orders of magnitude 
larger problem to network and debug a 
set of intertwined distributed services 
versus a single monolithic application.

Originally built at Lyft, 
Envoy is a high performance 
C++ distributed proxy designed 
for single services and applications, 
as well as a communication bus and 
“universal data plane” designed for 
large microservice “service mesh” architectures. 

Built on the learnings of solutions such as 
NGINX, HAProxy, hardware load balancers, and 
cloud load balancers, Envoy runs alongside every 
application and abstracts the network by providing 
common features in a platform-agnostic manner. 
When all service traffic in an infrastructure 
flows via an Envoy mesh, it becomes easy to 
visualize problem areas via consistent 
observability, tune overall performance, 
and add substrate features in a single place.

## WHAT IS ENVOY
- L7 (application) proxy and communication bus
- Designed for large modern service oriented architectures
- Aims to make the network layer (L3) transparent to applications.

Core Features:
- Out of process architecture:
    - Self-contained process
    - Runs alongside every application server
    - Envoys form a **transparent communication mesh**
        - Each app sends and receives messages to and from localhost
        - Each app is unaware of the network topology.
    - Works with any application language
    - Easy to deploy and upgrade
- Written in C++11
- Filter Architecture for the Network Layer (L3) & Transport Layer (L4):
    - At its core, it's an L3/L4 network proxy
    - Features a **pluggable filter chain mechanism**
        - Allows filters to be written to perform different TCP proxy tasks
        and inserted into the main server
        - Filters include:
            - raw TCP proxy
            - HTTP proxy
            - TLS client certificate authentication
            
- Filter Architecture for the HTTP Protocol (part of the app layer; L7):
    - Pluggable filters for:
        - Buffering
        - Rate limiting
        - Routing
        - Forwarding
        - Sniffing (DBs) 
        
- HTTP/2 support:
    - Any combination of HTTP/1.1 and HTTP/2 clients and target servers can be bridged
    
- HTTP Routing (app layer L7): 
    - Routing subsystem, capable of routing and redirecting requests based on:
        - Path
        - Authority
        - Content type
        - Runtime values
    - Useful when Envoy is used as a front/edge proxy
    
- gRPC Support

- MongoDB and DynamoDB L7 Support   

- Service Discovery and Dynamic Configuration

- Health checking

- Advanced load balancing

- Front/edge proxy support

- Best in class observability
    
