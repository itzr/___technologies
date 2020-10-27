Install the chart:
`helm install kong/kong \
 --generate-name \
 --set ingressController.installCRDs=false 
 `
 
*Adding a config file seems to cause
a failure to get a peer from the ring-balancer* /with config:
`helm install kong/kong \
 --generate-name \
 --set ingressController.installCRDs=false \
 -f config/config.yaml
 `
