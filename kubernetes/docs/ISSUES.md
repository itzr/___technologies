# With Docker Desktop (startup)
- upgrade to edge
- follow:
    https://github.com/docker/for-mac/issues/2990
    https://github.com/docker/for-mac/issues/3327
# With Docker Desktop (cannot pull image from local docker images)
Do not work:  `kubectl apply -f kubernetes-test-1.yaml` 
Does work: `kubectl run eth-test --image=interacting-with-eth-container-raw_server:latest --port 3030 --image-pull-policy=IfNotPresent`

Solution is based on image-pull-policy, however `apply` function 

Long term solution:
https://kubernetes.io/docs/concepts/containers/images/
https://kubernetes.io/docs/concepts/configuration/overview/

