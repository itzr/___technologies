### Issue 1 

On `draft up`:

'Error: Could not get a helm client: Could not get a connection to tiller: could not find tiller'

Seems there are compatibility issues between any of the below:
- Kubernetes cluster type & version
- Helm version
- Draft version

Solution based on community: 
`
helm init --service-account tiller --override spec.selector.matchLabels.'name'='tiller',spec.selector.matchLabels.'app'='helm' --output yaml | sed 's@apiVersion: extensions/v1beta1@apiVersion: apps/v1@' | kubectl apply -f -
`
