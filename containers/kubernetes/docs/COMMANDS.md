# Orchestration (deploying to production)
`kubectl apply -f <file.yaml>`
`kubectl get pods`
`kubectl logs <pod_name>`
`kubectl delete -f <file.yaml>`
# Deploy to Kubernetes (Docker desktop / deploying to production)
`kubectl apply -f <file.yaml>`
`kubectl get deployments`
`kubectl get services`
`kubectl get secret`
`kubectl get namespace`
`kubectl delete -f <file.yaml>`
# Debugging
`kubectl describe pod <pod-id>  `
# Delete all pods
`kubectl delete pods --all`
# Secret (create directly)
`kubectl create secret generic test-secret --from-literal='username=my-app' --from-literal='password=39528$vdg7Jb`
