kubectl create namespace kong-phase-3-app
kubectl label namespace kong-phase-3-app istio-injection=enabled
helm install myrabbit bitnami/rabbitmq --namespace kong-phase-3-app
echo "
- get the IP as a secret.
- IP will be given in the installation log
- Command: kubectl create secret generic rabbit-mq-secrets --from-literal=cluster-ip='ampq://<user>:<password>@<secret_ip> --namespace kong-phase-3-app'
- Pass in 2 extra secrets:
- Command: kubectl create secret generic mongo-db-secrets --from-literal=mongo-uri='<secret_uri>'
- Command: kubectl create secret generic infura-secrets --from-literal=infura-id='<secret_id>'
- (if lazy, use script on local)
- THIS CAN BE FURTHER IMPROVED SINCE RABBIT PASSWORD GIVEN IN SEPARATE SECRET CONTAINER
"
