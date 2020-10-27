istioctl operator init
kubectl create namespace istio-system
cd ../installation/ && kubectl apply -f istio-operator.yml
kubectl describe istiooperator -n istio-system
echo "WAIT FOR 'kubectl describe istiooperator -n istio-system' to return Status:HEALTHY"
echo "Once healthy, run part 2."
