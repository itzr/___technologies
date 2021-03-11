### IAM
Identity and Access Management

### Resource vs Endpoint (https://stackoverflow.com/questions/30580562/what-is-the-difference-between-resource-and-endpoint)
Resource: Resource is a RESTful subset of Endpoint.
Endpoint: An endpoint by itself is the location where a service can be accessed:

Resources are directly related to APIs. All resources are endpoints, not all endpoints are resources.

One endpoint can access different resources:

```
/api/companies
/api/companies?sort=name_asc
/api/companies?location=germany
/api/companies?search=siemens
```

### Concurrency v.s. Parallelism
Concurrency: When the execution of two or more pieces of code act as if they run at the same time
Parallelism: When they do run at the same time

### ACL (Access Control List)

An ACL is a list of user permissions for 
a file, folder, or other object. 
It defines what users and groups can 
access the object and what operations they 
can perform. While ACLs are typically hidden 
from the user, they can often be modified using 
a graphical interface.

### JWT (JSON Web Tokens)

JSON Web Token is an Internet standard 
for creating data with optional signature 
and/or optional encryption whose payload 
holds JSON that asserts some number of claims. 
The tokens are signed either using 
a private secret or a public/private key.

### URL (Uniform Resource Locator)

https://blog.brand.com/practice-area/published-blog-post
<protocol>://<subdomain>.<domain>.<top-level-domain>/<subdirectory>/<page>

### REST

Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations. Other kinds of Web services, such as SOAP Web services, expose their own arbitrary sets of operations

### Transport Layer Security (TLS)

Cryptographic protocols designed to provide communications security over a computer network

### Bindings

In programming and software design, a binding is an application programming interface that provides glue code specifically made to allow a programming language to use a foreign library or operating system service.
``
