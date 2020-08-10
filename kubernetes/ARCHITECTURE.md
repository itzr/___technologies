# Architecture

### Cluster
- Cluster Roles
- Namespaces
- Nodes
- Persistent Volumnes
- Storage Classes

### Workloads
- Cron jobs: Long-running process that executes commands at specific dates and times
- Daemon Sets: Ensures that an instance of a specific pod is running on all (or a selection of) nodes in a cluster.
- Deployments: Checks on the health of your Pod and restarts the Pod's Container if it terminates. Deployments are the recommended way to manage the creation and scaling of Pods. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. Deployments can create and destroy Pods dynamically.
- Jobs
- Pods: a group of one or more Containers, tied together for the purposes of administration and networking
- Replica Sets
- Replication Controllers
- Statful Sets

### Discovery and Load Balancing
- Ingresses
- Services: An abstract way to explore an application running on a set of Pods as a network service. It defines a logical set of Pods and policy by which to access them (microservice pattern). (service example: stateless image-processing backend). It is a REST object.

### Config and Storage
- Config Maps
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

