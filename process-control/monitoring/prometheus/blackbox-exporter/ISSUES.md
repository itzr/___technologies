# Issues

### Metrics returning 0

Notice that almost all metrics have a value of 0. The last one reads probe_success 0. This means the prober could not successfully reach prometheus.io. The reason is hidden in the metric probe_ip_protocol with the value 6. By default the prober uses IPv6 until told otherwise. But the Docker daemon blocks IPv6 until told otherwise. Hence our blackbox exporter running in a Docker container can’t connect via IPv6.

We could now either tell Docker to allow IPv6 or the blackbox exporter to use IPv4. In the real world both can make sense and as so often the answer to the question "what is to be done?" is "it depends".

Solution: https://prometheus.io/docs/guides/multi-target-exporter/
