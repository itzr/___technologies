# Verification 

**In BASH, not ZSH**

pods=$(kubectl get pods --selector=job-name=<job_name> --output=jsonpath={.items[*].metadata.name})

*job_name and pod name are different*

kubectl logs $pods

todo: Need a log stream.

## Development

access the container and curl!: `kubectl exec --stdin --tty hello-dev-v88f5 -- /bin/sh`
