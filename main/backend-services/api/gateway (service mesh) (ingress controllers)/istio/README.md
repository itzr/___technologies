Guide w/Kong: https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/guides/getting-started-istio.md

# Why Itsio

*"Zero code for logging and monitoring" 
is the primary reason why developers 
consider Istio over the competitors*

# Itsio: Service Mesh

Basic: https://www.youtube.com/watch?v=1iyFq2VaL5Y
Service Mesh: https://www.youtube.com/watch?v=6zDrLvpfCK4

Extends Kubernetes using CRDs

# Installation
get: `curl -L https://istio.io/downloadIstio | env ISTIO_VERSION=1.6.7 sh -`
run: `./istio-1.6.7/bin/istioctl operator init`

# Concepts: Observability
https://istio.io/latest/docs/concepts/observability/

# Notes

Unless the Istio operator is initialised locally,
it cannot be served by Kubernetes

