#### Issue Log
####Failure to get a peer from the ring-balancer

todo: ASK ON GITHUB

*TL:DR; Install without specifying a config.yaml file*

Suggested Options:

Downgrade from 1.2 to 1.1.2 

Upgrades from 1.2 to 1.3

*Not relevant since the image is now at 2.x*

Issues:

Endpoints can be identical => https://github.com/Kong/kong/pull/4817

Worker events => https://github.com/Kong/kong/pull/4810

Fix **strange**

- As soon as I installed without specifying a config.yaml file (even when it was empty)
it worked!
