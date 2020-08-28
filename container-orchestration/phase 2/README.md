### Objectives

- Injecting sensitive variables into clusters

- Speedyier development process
- use Prometheus
- use Grafana
- use Tekton
- use Cri-o
- Access the Kubernetes dashboard: 
    - (dashboard): 
        - run `k-gui` alias for `kubectl proxy`
        - go to `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/.`
    - (guide) https://www.replex.io/blog/how-to-install-access-and-add-heapster-metrics-to-the-kubernetes-dashboard
- How to set up cluster monitoring with Prometheus and Grafana
- How to deploy a PerfTest instance to do basic functional and load testing of the cluster

### Injecting sensitive variables into clusters
- docker swarm supports 'secrets'
- kubernetes support secrets (see kubernetes/handling-secrets)
- for the cloud, there are more sophisticated tools:
    - vault by hashicorp
    - AWS secrets manager

