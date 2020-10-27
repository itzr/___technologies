kubectl create namespace kong-istio
kubectl label namespace kong-istio istio-injection=enabled
helm install -n kong-istio example-kong kong/kong --set ingressController.installCRDs=false
kubectl create namespace my-istio-app
kubectl label namespace my-istio-app istio-injection=enabled
kubectl apply -n my-istio-app -f application.yml
kubectl apply -n my-istio-app -f rate-limit.yml
kubectl apply -n my-istio-app -f proxy-traffic-to-a-service.yml
echo "Wait for successful application deployment check with 'kubectl get all'"
echo "Once successful, on separate terminals, run:"
echo "CONNECT TO THE APPLICATION via KONG & ISTIO"
echo "kubectl port-forward service/example-kong-kong-proxy 8080:80 -n kong-istio"
echo "CONNECT TO KIALI - THE ISTIO DASHBOARD - NOTE THE NAMESPACE"
echo "kubectl port-forward service/kiali 20001:20001 -n istio-system"
echo "CONNECT TO GRAFANA - DASHBOARD FOR PROMETHEUS, WHICH HAS BEEN DEPLOYED WITH ISTIO - NOTE THE NAMESPACE"
echo "kubectl port-forward service/grafana 3000:3000 -n istio-system"
echo "navigate to: 0:8080, 0:20001, 0:3000"
echo "verify application installation: 'k get all -n=my-istio-app'"
echo "DONE"
