# Kubernetes cluster has two types of resources:
- Master: coordinates all activites (scheduling, maintaining state, scaling, updating) 
- Nodes: Each node is VM. Each node has a 'Kubelet', an agent for managing the node, contains relevent tools e.g Docker or rkt

## General
- Master communicates with Nodes via the Kubernetes API (exposed by master)
- User can commmunicate with Master or interact with the cluster directly.

## Requirements for Local
- kubectl: command line tool to deploy, inspect, manage or view logs
- minikube OR kind: 'lets you' run Kubernetes locally. Minikube runs a cluster. Kind runs a container (and requires Docker)

## Extra requirements for MiniKube
- Hybervisor (HyperKit, VirtualBox or VMware Fusion)

## Start up
Install kubectl (brew), minikube (brew) & virtualbox (native app)

Run: `minikube start --driver=virtualbox`
Check `minikube status`

## Deployment
Once cluster is running. Kubernetes needs a deployment configuration.
Deployment configuration: Create and update instances of the application
Use Kubectl to manage deployments.
Must specify the container image and number of replicas you want to run.

Open the dashboard in the browser: `minikube dashboard`
Create a resource: `kubectl create --help`

Can create: clusterrole, clusterrolebinding, configmap, cronjob, deployment, job, namespace, poddisruptionbudget, priorityclass, quota, role, rolebinding ,secret, service, serviceaccount

Create a deployment usage: `kubectl create deployment NAME --image=image [--dry-run] [options]`
Create a deployment example: `kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4`

Done!

Next steps: create a service (expose IP publically) or view an app (access API from terminal via proxy)

### Deployment useful commands
View deployments: `kubectl get deployments`
View pod: `kubectl get pods`
View cluster events: `kubectl get events`
View configuration: `kubectl config view`
