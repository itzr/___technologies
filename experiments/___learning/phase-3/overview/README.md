# Task:

- Set up Project with Kong and Istio (bootstrap from kong ingress controller chart guide 2)
    - Current Stack
        - NodeJs
        - RabbitMQ
        - MongoDB
    - Additional Features:
        - API Authentication (as a service)
        - All process-control featured in the Istio book example (Kiali, etc)
    - **Guide**: https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/guides/getting-started-istio.md
 
#### Starting Point
- Breakdown and diagnose the book info app. 
- Keep active on a separate namespace with the same cluster

    
### Objectives

- handling logs on Kubernetes (in progress)
    - see: ./logging/* (mainly Loki)
    - see: prometheus *not logging but relevant*
        - share labelling system with loki 
    - see: https://kubernetes.io/docs/tasks/debug-application-cluster/
- authentication for api calls
- understand difference between protocol types http vs tcp (done; see: https://www.extrahop.com/company/blog/2018/tcp-vs-http-differences-explained/) 

- (soon; likely for next phases) hosting kubernetes cluster on cloud 

# Logging and monitoring
- Launch Loki with extras on cluster (see /loki/*) and configure 

