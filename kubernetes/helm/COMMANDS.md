general: `helm`
add to repo: `helm repo add stable https://kubernetes-charts.storage.googleapis.com/`
search local repo: `helm search repo stable`
update: `helm repo update`
install (generic): `helm install <repo/name> --generate-name`
install (example): `helm install stable/mysql --generate-name`
show features (basic): `helm show chart <repo/name>`
show all info: `helm show all <repo/name>`
pull chart to local (example): `helm pull stable/rabbitmq-ha --version 1.44.1 --untar`
create a new chart: `helm create mychart`
package chart into an archive: `helm package mychart`
lint for issues: `helm lint mychart`
