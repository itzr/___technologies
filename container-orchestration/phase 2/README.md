### Objectives

- Injecting sensitive variables into clusters (done)

- Speedy development process

- Explore:
    - Prometheus (scrapes ports for analytics; monitoring system)
    - Grafana (query, visualize and alert on metrics & logs)
    - Tekton (framework to create cloud-native CI/CD pipelines quickly.)
    - Cri-o (lightweight alternative to docker)
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

### Speedier dev

Issue:
Don't want to build and push a container everytime to use in kubernetes

### Prometheus

You can monitor on the local by:
- starting with brew services
- checking the port (use alias: `port-scan`)
- configure in /usr/local/etc/prometheus.yml
    - decide what ports to scrape from:
        (https://prometheus.io/docs/prometheus/latest/getting_started/)
