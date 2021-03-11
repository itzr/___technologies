istioctl operator init
kubectl create namespace istio-system
kubectl apply -f basic-operator-config.yml -n istio-system
kubectl describe istiooperator -n istio-system
