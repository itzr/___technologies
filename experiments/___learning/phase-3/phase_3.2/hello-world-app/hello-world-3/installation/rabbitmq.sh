kubectl create namespace rabbitmq
kubectl label namespace rabbitmq istio-injection=enabled
helm install myrabbit bitnami/rabbitmq --namespace rabbitmq
echo "WARNING: Save USER & PASSWORD, or extract from secrets cluster."
