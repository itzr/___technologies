### Objectives

- effective versioning / tagging system for images and charts
- integration between local and cloud repository
- docker & kubernetes (helm) integration
- systematic checks / techniques to minimize network issues regarding ports and port-forwarding 

### What have I learned so far

- Cluster are governed by context (I think) : A kubernetes cluster spans beyond what is in a particular .yaml file
https://www.redhat.com/en/topics/containers/what-is-a-kubernetes-cluster
    - You don't need to nest everything into a chart or kubernetes file.
- use namespaces to kubens for more control
- save installation logs for critical info, like how to get the cluster-only-access port:
    e.g **myrabbit-rabbitmq.itzr-rabbit.svc** translates to **<GIVEN_NAME>-<CHART_NAME>.<NAMESPACE>.svc**
- careful accessing passport protected urls: "amqp://user:IPz1dRTBbn@myrabbit-rabbitmq.itzr-rabbit.svc". 
- pulling from docker hub can be time consuming if their is no pipeline. 
    - better to work from local then push to docker hub.

### Next steps

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

