**kubernetes namespace**=`itzr-rabbit`
**install script**=`helm install myrabbit bitnami/rabbitmq --namespace itzr-rabbit`
**install log**=
```
NAME: myrabbit
LAST DEPLOYED: Tue Aug 25 09:33:40 2020
NAMESPACE: itzr-rabbit
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **

Credentials:

    echo "Username      : user"
    echo "Password      : $(kubectl get secret --namespace itzr-rabbit myrabbit-rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)"
    echo "ErLang Cookie : $(kubectl get secret --namespace itzr-rabbit myrabbit-rabbitmq -o jsonpath="{.data.rabbitmq-erlang-cookie}" | base64 --decode)"

RabbitMQ can be accessed within the cluster on port  at myrabbit-rabbitmq.itzr-rabbit.svc.

To access for outside the cluster, perform the following steps:

To Access the RabbitMQ AMQP port:

    echo "URL : amqp://127.0.0.1:5672/"
    kubectl port-forward --namespace itzr-rabbit svc/myrabbit-rabbitmq 5672:5672

To Access the RabbitMQ Management interface:
    echo "URL : http://127.0.0.1:15672/"
    kubectl port-forward --namespace itzr-rabbit svc/myrabbit-rabbitmq 15672:15672

```
**check deployment(all)**=`watch kubectl get deployments,pods,services --namespace itzr-rabbit`
