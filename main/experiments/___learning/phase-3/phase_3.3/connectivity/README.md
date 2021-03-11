INGRESS: https://medium.com/@cashisclay/kubernetes-ingress-82aa960f658e
APP EXAMPLE: https://itnext.io/react-express-node-js-and-mongodb-mern-stack-microservices-based-application-deployment-on-ec4607cec74d

- network connectivity issues in /application
- expose everything on port 1234

Options:
- expose the server API externally
- use a nginx external load balancer (https://itnext.io/react-express-node-js-and-mongodb-mern-stack-microservices-based-application-deployment-on-ec4607cec74d)
    - still exposed globally
- use gRPC
- use an ingress and expose on a route. 

----
The problem with this configuration is the idea 
that the Frontend app will be trying to reach out to 
the API via the internal cluster. But it will not. 

My app, on the client's browser can not 
reach services and pods in my Kluster.

My cluster will need something like 
nginx or another **external Load Balancer**
to allow my client side api calls to reach my API.

You can alternatively use your front end app, 
as your proxy, but that is highly not advised!

https://stackoverflow.com/questions/48760123/frontend-communication-with-api-in-kubernetes-cluster

---
Same flow as me: https://stackoverflow.com/questions/50195896/how-do-i-get-one-pod-to-network-to-another-pod-in-kubernetes-simple
