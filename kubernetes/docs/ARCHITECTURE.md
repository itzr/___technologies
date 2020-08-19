# Architecture

### Cluster
- Cluster Roles
- Namespaces
- Nodes
- Persistent Volumnes
- Storage Classes

### Workloads
- Cronjobs: Long-running process that executes commands at specific dates and times. You can use cronjobs to run jobs
- Daemon Sets: Ensures that an instance of a specific pod is running on all (or a selection of) nodes in a cluster.
- Deployments: Checks on the health of your Pod and restarts the Pod's Container if it terminates. Deployments are the recommended way to manage the creation and scaling of Pods. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. Deployments can create and destroy Pods dynamically.
- Jobs: A finite or batch task that runs to completion.
- Pods: a group of one or more Containers, tied together for the purposes of administration and networking
- Replica Sets: A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. As such, it is often used to guarantee the availability of a specified number of identical Pods.
- Replication Controllers
- Statful Sets: A set of Pods with durable storage and persistent identifiers.

### Discovery and Load Balancing
- Ingresses
- Services: An abstract way to explore an application running on a set of Pods as a network service. It defines a logical set of Pods and policy by which to access them (microservice pattern). (service example: stateless image-processing backend). It is a REST object. Services enable a loose coupling between dependent Pods. A Service is defined using YAML (preferred) or JSON, like all Kubernetes objects. A service comes in 1 of 4 types:

    - ClusterIP (default) - Exposes the Service on an internal IP in the cluster. This type makes the Service only reachable from within the cluster.
    - NodePort - Exposes the Service on the same port of each selected Node in the cluster using NAT. Makes a Service accessible from outside the cluster using <NodeIP>:<NodePort>. Superset of ClusterIP.
    - LoadBalancer - Creates an external load balancer in the current cloud (if supported) and assigns a fixed, external IP to the Service. Superset of NodePort.
    - ExternalName - Exposes the Service using an arbitrary name (specified by externalName in the spec) by returning a CNAME record with the name. No proxy is used. This type requires v1.7 or higher of kube-dns.



### Config and Storage
- Config Maps: ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable. This page provides a series of usage examples demonstrating how to create ConfigMaps and configure Pods using data stored in ConfigMaps.
- Persistent Volume Claims
- Secrets

#### Other Features

### kube-apiserver
- The kubernetes API server validates and configures data for the api objects which include pods, services, replicationcontrollers, and others. The API Server services REST operations and provides the frontend to the cluster's shared state through which all other components interact


#### Notes

##### cronjob vs daemon

Robustness favours cronjobs
Performance favours a daemon

Daemon advantages:
- Runs are frequencies greater than 1 per minute
- Easier to remember state
- Does not cause the 'stampedeing herd' effect
- Multiple invocations can be avoided more easily

Daemon disadvantages:
- If it quits (from an error), it won't automatically be restarted unless retry feature is implemented
- Uses memory even when not doing anything useful
- Memory leaks are more of a probem 

