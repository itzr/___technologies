### Requirments

After the deployment. (see README.md)

### Steps
Expose the pod to the public internet (by default the Pod is only accessible by its internal IP address within the Kubernetes cluster; to make it accessible, expose it as a Service):
	General cmd: `kubectl expose`
	Example: `kubectl expose deployment hello-node --type=LoadBalancer --port=8080`

* There are 4 types of services:  ClusterIP, NodePort, LoadBalancer, or ExternalName. Default is 'ClusterIP'.

* In the example: We expose a LoadBalancer. On cloud, need an external IP adress to be provisioned access to the Servivce. On Minikube
 	Run: `minikube service [LOAD BALANCER NAME]`
	Example: `minikube service hello-node`
	
* For addons see: `minikube addons list`

#### Useful commands
View services: `kubectl get services`
