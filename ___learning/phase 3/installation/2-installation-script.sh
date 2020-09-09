kubectl create namespace kong-istio
kubectl label namespace kong-istio istio-injection=enabled
helm install -n kong-istio example-kong kong/kong --set ingressController.installCRDs=false
echo "Wait for successful kong deployment check with 'kubectl get all'"
echo "Once successful, run step 3"
