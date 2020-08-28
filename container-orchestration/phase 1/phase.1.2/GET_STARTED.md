create a namespace: `kubectl create namespace <namespace name>`
switch to namespace: `kubens <namespace name>`
install rabbit in ns: `helm install myrabbit bitnami/rabbitmq --namespace <namespace name>`
save the logs: *loads of important info*
    - user, tokens, how-to-access within and outside of the cluster
make sure web app points to the correct url port with username & password.
    - e.g.: `amqp://user:IPz1dRTBbn@myrabbit-rabbitmq.itzr-rabbit.svc`
    - this should be an env.
install the webapp: `helm install <name> <path/to/foo>`

