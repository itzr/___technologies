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

### Rules
- Kubernetes cluster = set of nodes
- Every cluster has at least one worker node
- Worker node host Pods
- Pods are components of the application
- The control plane manages the worker nodes and the Pods


#### Control Plane Components

- kube-apiserver: The kubernetes API server validates and configures data for the api objects which include pods, services, replicationcontrollers, and others. The API Server services REST operations and provides the frontend to the cluster's shared state through which all other components interact. It is the 'front end' for the control plane.
- etcd: key value store for all cluster data
- kube-scheduler: watches Pods and selects a node for them to run on
- kube-controller-manager: runs controller processes
    - Node controller: Responsible for noticing and responding when nodes go down.
    - Replication controller: Responsible for maintaining the correct number of pods for every replication controller object in the system.
    - Endpoints controller: Populates the Endpoints object (that is, joins Services & Pods).
    - Service Account & Token controllers: Create default accounts and API access tokens for new namespaces.
- cloud-controller-manager
    - A Kubernetes control plane component that embeds cloud-specific control logic.
    - The cloud-controller-manager only runs controllers that are specific to your cloud provider. If you are running Kubernetes on your own premises, or in a learning environment inside your own PC, the cluster does not have a cloud controller manager.
    - combines several logically independent control loops into a single binary that you run as a single process.
    - The following controllers can have cloud provider dependencies:
        - Node controller: For checking the cloud provider to determine if a node has been deleted in the cloud after it stops responding
        - Route controller: For setting up routes in the underlying cloud infrastructure
        - Service controller: For creating, updating and deleting cloud provider load balancers

#### Node Components
- kubelet

    - An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod .

    - The kubelet takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are running and healthy. The kubelet doesn’t manage containers which were not created by Kubernetes.

- kube-proxy

    - kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

    - kube-proxy maintains network rules on nodes. These network rules allow network communication to your Pods from network sessions inside or outside of your cluster.

    - kube-proxy uses the operating system packet filtering layer if there is one and it's available. Otherwise, kube-proxy forwards the traffic itself.

- Container runtime

    - The container runtime is the software that is responsible for running containers.

    - Kubernetes supports several container runtimes: Docker , containerd , CRI-O , and any implementation of the Kubernetes CRI (Container Runtime Interface).

#### Add-ons
- DNS (Domain Name System): Cluster DNS serves DNS records for Kubernetes services
- Web UI (Dashboard) 
- Container Resource Monitoring
- Cluster-level Logging

### Kubernetes Objects

Kubernetes objects are persistent entities in the Kubernetes system. Kubernetes uses these entities to represent the state of your cluster. Specifically, they can describe:

- What containerized applications are running (and on which nodes)
- The resources available to those applications
- The policies around how those applications behave, such as restart policies, upgrades, and fault-tolerance

#### Required Fields

- apiVersion - Which version of the Kubernetes API you're using to create this object
- kind - What kind of object you want to create
- metadata - Data that helps uniquely identify the object, including a name string, UID, and optional namespace
- spec - What state you desire for the object: The precise format of the object spec is different for every Kubernetes object, and contains nested fields specific to that object

For More: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/
    
In practice: "docker/__code/interacting-with-eth-container-raw/kubernetes-test-2.yaml"

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

