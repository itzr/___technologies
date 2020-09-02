NAME: itzr-rabbit
LAST DEPLOYED: Tue Sep  1 19:19:24 2020
NAMESPACE: itzr-microservice
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **

Credentials:

    echo "Username      : user"
    echo "Password      : $(kubectl get secret --namespace itzr-microservice itzr-rabbit-rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)"
    echo "ErLang Cookie : $(kubectl get secret --namespace itzr-microservice itzr-rabbit-rabbitmq -o jsonpath="{.data.rabbitmq-erlang-cookie}" | base64 --decode)"

RabbitMQ can be accessed within the cluster on port  at itzr-rabbit-rabbitmq.itzr-microservice.svc.

To access for outside the cluster, perform the following steps:

To Access the RabbitMQ AMQP port:

    echo "URL : amqp://127.0.0.1:5672/"
    kubectl port-forward --namespace itzr-microservice svc/itzr-rabbit-rabbitmq 5672:5672

To Access the RabbitMQ Management interface:

    echo "URL : http://127.0.0.1:15672/"
    kubectl port-forward --namespace itzr-microservice svc/itzr-rabbit-rabbitmq 15672:15672
