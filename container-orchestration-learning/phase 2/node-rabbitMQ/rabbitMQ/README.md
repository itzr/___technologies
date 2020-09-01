---- rabbitMQ -----

install rabbit in ns: `helm install myrabbit bitnami/rabbitmq --namespace <namespace name>`

pass rabbit IP to node: `kubectl create secret generic rabbit-mq-secrets --from-literal=cluster-ip='<secret>'`
    - *cluster-ip example*: amqp://user:p@zzwrd1@rabbit-name.namespace.svc

secret env should get picked up by the node container
(ideally) convert secret to base64

validate: `kubectl exec -i -t <node-container> -- /bin/sh -c 'echo $<rabbit-mq-cluster-ip>'`

---- mongoURI ----

pass mongoURI to node: `kubectl create secret generic mongo-db-secrets --from-literal=mongo-uri='<secret>'`
