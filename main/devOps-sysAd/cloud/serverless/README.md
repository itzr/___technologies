https://kubeless.io/
deploying kubernetes on aws (https://vshn.ch/en/blog/a-very-quick-comparison-of-kubernetes-serverless-frameworks/)
"2 (https://rancher.com/blog/2020/three-way-to-run-aws)

-----------------
Serverless App's deploy services to the defined stage:

services (1,2,3) => AWS ACCOUNT 1:DEV (1,2,3)
services => AWS ACCOUNT 1:STAGING
services => AWS ACCOUNT 2:PROD

Each service is deployed as a stack. 1 service => 1 stack

However with AWS CDK (cloud development kit), each cdk stack is deployed as a CloudFormation stack, but it can be deployed to different AWS accounts / regions.
This can create a mess, as each time you deploy, it could potentially create multiple stack environments.

Serverless attempt to solve this with the `Serverless Stack Toolkit` (SST):

https://github.com/serverless-stack/serverless-stack
