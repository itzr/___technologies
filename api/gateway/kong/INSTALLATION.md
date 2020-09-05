Install the chart:
`helm install kong/kong \
 --generate-name \
 --set ingressController.installCRDs=false \
 -f config/config.yaml
 `
