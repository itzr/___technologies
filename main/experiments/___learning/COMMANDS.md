**docker**

build & tag: `docker build -t <username/containername:tag> <path>` *w/ host-to-ip mapping: `... -add-host`
push to repo: `docker push itzr/hello-world:tagname`
run (detached & publish ports): `docker run -p <localPort:containerPort> -d <name:tag>`
see active: `docker ps`
check logs: `docker logs <container id>`
enter container: `docker exec -it <container id> /bin/bash`
networking: `docker network --help`
secrets: `docker secret --help`
**docker-compose**

rebuild: `docker-compose down && docker-compose up --build` 

**kubectl**

apply: `kubectl apply -f <file.yaml>`
delete: `kubectl delete -f <file.yaml>`
debug: `kubectl describe pod <pod-id>` 
delete pods: `kubectl delete pods --all`
see
   pods: `kubectl get pods`
   deployments: `kubectl get deployments`
   services: `kubectl get services`
   logs: `kubectl logs <pod_name>`
   namespaces: `kubectl get namespaces`
**kubens (switch namespace)**
guide: `kubens --help`
**kubectx (switch context)**
guide: `kubectx --help`
**helm**
chart:
    upgrade: `helm upgrade <name> <path>`
    *tip* to get the name: `helm ls`
    install:
        - `helm install <repo/name> --generate-name`
        - `helm install <name> <stable/mysql>`
        - `helm install <name> <path/to/foo>`
        - `helm install <name> <bar-1.2.3.tgz>`
        - `helm install <name> <https://example.com/charts/bar-1.2.3.tgz>`
    pull: `helm pull stable/rabbitmq-ha --version 1.44.1 --untar`
    create: `helm create mychart`
    package: `helm package mychart`
    lint: `helm lint mychart`
    delete: `helm delete --purge mychart`
dependencies: 
    rebuild from *Chart.lock*: `helm dependency build`
    list dependencies chart: `helm dependency list` 
    update charts from *Chart.yaml*: `helm dependency update`
repo: 
    add to: `helm repo add stable https://kubernetes-charts.storage.googleapis.com/`
    list: `helm repo list`
    update: `helm repo update`
search:
    all installed charts: `helm search`
    specific installed charts: `helm search <name>`
    charts in local repo: `helm search repo <repo_name>`
show: 
    release numbers: `helm history foo`
    features: `helm show chart <repo/name>`
    all info: `helm show all <repo/name>`
    installed charts: `helm ls`
    all deleted `helm ls --deleted`
    chart variables: `helm inspect values stable/mysql`
    chart status: `helm status <name>`
to upgrade:
    return variables for release: `helm get values foo`
    upgrade: `helm upgrade --values config.yaml foo stable/mysql`
    rollback: `helm rollback foo 1`
*helm post install*
`export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=hello-world-chart,app.kubernetes.io/instance=chart-1598258210" -o jsonpath="{.items[0].metadata.name}")`
`echo "Visit http://127.0.0.1:8080 to use your application"`
`kubectl --namespace default port-forward $POD_NAME 8080:80`
        
**gcloud**
**gsutil**
**supervisor**

**other**
sanity ping: `curl -i localhost:49160`
check logs: `pred='process matches ".*(ocker|vpnkit).*" || (process in {"taskgated-helper", "launchservicesd", "kernel"} && eventMessage contains[c] "docker")' /usr/bin/log stream --style syslog --level=debug --color=always --predicate "$pred"`
