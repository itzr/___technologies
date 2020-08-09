## Kubernetes cluster has two types of resources:
- Master: coordinates all activites (scheduling, maintaining state, scaling, updating) 
- Nodes: Each node is VM. Each node has a 'Kubelet', an agent for managing the node, contains relevent tools e.g Docker or rkt

## General
- Master communicates with Nodes via the Kubernetes API (exposed by master)
- User can commmunicate with Master or interact with the cluster directly.
-
## Requirements for Local
- kubectl: command line tool to deploy, inspect, manage or view logs
- minikube OR kind: 'lets you' run Kubernetes locally. Minikube runs a cluster. Kind runs a container (and requires Docker)
