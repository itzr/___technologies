# Summary
- An API object that manages external access to the services in a cluster
- Typically, HTTP
- Additional features:
    - Load balancing
    - SSL termination
    - Name-based virtual hosting
# What is Ingress?
- Exposes HTTP & HTTPS routes from outside the cluster to services within the cluster
- Traffic routing is controlled by rules defined on the Ingress resource

      internet
         |
    [ Ingress ]
   -- | ----| --
    [ Services ]
    
- Can be configured to give Services:
    - externally reachable URLs
    - load balance traffic
    - terminate SSL/TLS
    - offer name based virtual hosting
    
- Does not expose arbitrary ports or protocols
    - *note* exposing services other than HTTP & HTTPS to the internet typically uses:
        - Service.Type=NodePort
        - Service.Type=LoadBalancer
