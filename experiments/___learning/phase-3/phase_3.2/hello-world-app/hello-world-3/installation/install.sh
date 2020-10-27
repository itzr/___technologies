echo '!!!!!!!!!!!!!!!!!!!!!!WARNING !!!!!!!!!!!!!!!!!!'
#NOTE: INSTALLATION DID NOT WORK AS INTENDED BECAUSE
#RABBITMQ NAMESPACE WAS NOT INJECTED WITH ISTIO.
#IT SEEMS 'SLEEP 60' WAS NOT LONG ENOUGH.
#INSTEAD WAS CAN LOOP WITH GREP FOR "HEALTHY" AND ONCE FOUND
#CONTINUE THE INSTALLATION
istioctl operator init
kubectl create namespace istio-system
kubectl apply -f ../istio-manifests/operator-init.yaml
kubectl describe istiooperator -n istio-system
sleep 60
./rabbitmq.sh
cd ..
kubectl create namespace hello-world-3
kubectl label namespace hello-world-3 istio-injection=enabled
kubens hello-world-3
skaffold dev
echo "WARNING: Save USER & PASSWORD, or extract from secrets cluster."
