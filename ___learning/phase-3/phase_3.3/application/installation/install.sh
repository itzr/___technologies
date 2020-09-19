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
sleep 120
#./rabbitmq.sh
cd ..
kubectl create namespace application
kubectl label namespace application istio-injection=enabled
kubens application
skaffold dev
echo "WARNING: Save USER & PASSWORD, or extract from secrets cluster."
