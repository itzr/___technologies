All containers in Kubernetes are scheduled as pods, which are groups of co-located containers that share some resources. Furthermore, in a realistic application we almost never create individual pods; instead, most of our workloads are scheduled as deployments, which are scalable groups of pods maintained automatically by Kubernetes. Lastly, all Kubernetes objects can and should be described in manifests called Kubernetes YAML files. These YAML files describe all the components and configurations of your Kubernetes app, and can be used to easily create and destroy your app in any Kubernetes environment.

If you see '8080:30001/TCP'

# "LOCAL:DOCKER"
# "OUTSIDE:INSIDE"

This means the container is accepting traffic on port 30001/TCP.

Therefore visit: localhost:30001
