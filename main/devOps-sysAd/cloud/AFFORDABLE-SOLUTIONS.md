Affordable Solutions:

Option

Firebase (and other Serverless solutions)

https://firebase.google.com/
https://serverless-stack.com/

Option

Digital Ocean

Starts @ $10 per Month
2 node cluster @ $15 per Month.

https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-cluster-using-kubeadm-on-ubuntu-18-04

https://www.digitalocean.com/products/kubernetes/


Possible

- Serverless on DigitalOcean

https://www.digitalocean.com/community/tutorials/how-to-run-serverless-functions-using-openfaas-on-digitalocean-kubernetes

Option

- g1-small preemptible nodes
    - run 24hr max and are removed by Google whenever they want
    - https://cloud.google.com/preemptible-vms
- nginx-ingress
    - ServiceType = ClusterIP
    - HostNetwork = True
    - Instead of provisioning an expensive cloud load balancer, each Node itself will act as a public-facing reverse proxy
- KubeIP 

Guide: https://devonblog.com/containers/affordable-kubernetes-cluster/

KubeIP: 


Read through there solutions

https://cloud.google.com/solutions/deploying-production-ready-gitlab-on-gke

Immutable Infrastructure
https://www.digitalocean.com/community/tutorials/what-is-immutable-infrastructure
