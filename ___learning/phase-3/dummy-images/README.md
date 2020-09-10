### Overview

- Exploring how the app and it's microservices configured.

- Architecture & Overview: https://istio.io/latest/docs/examples/bookinfo/

- Installation Used: https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/guides/getting-started-istio.md

### Book Info Components:

--- requests --> product page (PYTHON) --> reviews (JAVA; 3 x versions) --> ratings (NODEJS)
                                       --> details (RUBY)
 
Details (ruby): docker.io/istio/examples-bookinfo-details-v1:1.16.2
Ratings (node): docker.io/istio/examples-bookinfo-ratings-v1:1.16.2
Reviews (java, v1): docker.io/istio/examples-bookinfo-reviews-v1:1.16.2
Reviews (java, v2): docker.io/istio/examples-bookinfo-reviews-v2:1.16.2
Reviews (java, v3): docker.io/istio/examples-bookinfo-reviews-v3:1.16.2
Product Page (python): docker.io/istio/examples-bookinfo-productpage-v1:1.16.2
