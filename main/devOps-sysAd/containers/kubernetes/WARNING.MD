If you are having issues access an ip:port, 
you've probably forgotten about port-forwarding

example: `kubectl port-forward service/example-kong-kong-proxy 8080:80 -n kong-istio`
