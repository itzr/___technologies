### Prometheus

- Systems and service monitoring system.

- Collects metrics from configured targets
    - Configured at given intervals
    - Evaluates rule expressions
    - Displays the results
    - **Can trigger alerts if some condition is observed to be true!**

Prometheus's main distinguishing features as compared to other 
monitoring systems are:

- A multi-dimensional data model (Timeseries defined by metric name and set of key/value dimensions)
- PromQL, a powerful and flexible query language to leverage this dimensionality
- No dependency on distributed storage
- Single server nodes are autonomous
- Time-series features: 
    - Time-series collection happens via a pull model over HTTP
    - Pushing timeseries is supported via an intermediary gateway
- Targets are discovered via service discovery or static configuration
- Multiple modes of graphing and dashboarding support
- Support for hierarchical and horizontal federation

###### Prometheus (note)

- Default: port 9090

## Core Modules
- Prometheus: Monitoring system and time series database
- Alert manager: 
    - The Alert-manager handles alerts sent by 
    client applications such as the Prometheus server. 
    - It takes care of de-duplicating, grouping, and routing them 
    to the correct receiver integrations such as email, PagerDuty, 
    or OpsGenie. 
    - It also takes care of silencing and inhibition of alerts.
- Blackbox prober:
    - The blackbox exporter allows blackbox probing of endpoints 
    - Can use: HTTP, HTTPS, DNS, TCP and ICMP. 
- Exporter for Consul metrics
- graphite_exporter: Server that accepts metrics via the Graphite protocol and exports them as Prometheus metrics
- haproxy_exporter: Scrapes HAProxy stats and exports them via HTTP for Prometheus consumption
- memcached_exporter: Exports metrics from memcached servers for consumption
- mysqld_exporter: Exports MYSQL server metrics
- node_exporter: Exporter for nodejs
- pushgateway: Push acceptor for ephemeral and batch jobs (ephemeral = lasting a very short time)
- StatsD: statsD to prometheus

### Integrations (What are they?)

- Consul: 
    - A service mesh solution (by Hashicorp) providing a full featured control plane
    - Provides service discovery, configuration, and segmentation functionality
    - Features can be used individually or in a full-service mesh
    - Requires a data plane
    - Supports proxy and native integration
    - Key Features
        - Service discovery:
            Clients of Consul can register a service (such as api or mysqL), other clients can use Consul to discover providers of a given servic
        - Health Checking
        - KV Store
        - Secure Service Communication: Generates and distributes TLS certificates
        - Supports Multi Datacenter out of the box.
- Graphite protocol: 
    - Stores numeric time-series data
    - Renders graphs of this data on demand
    - It DOES NOT collect data. You need to send data to Graphite!
    - **Tools** that work with Graphite: https://graphite.readthedocs.io/en/latest/tools.html
- HaProxy: 
    - High availability load balancer and proxy server for TCP & HTTP-based apps
    - Spreads requests across multiple servers
- Memcache: 
    - General-purpose distributed memory-caching system
- Push acceptor: 
    - For metrics that are not long enough to be scraped. 
    - Instead, they push metrics to a Pushgateway.
    - Not an aggregator, Not a distributed counter
    - It is a metrics cache.
- StatsD: 
    - A network daemon that runs on the Node.js platform
    - Listens for statistics, like counters and timers,
    - Sends statistics over UDP or TCP
    - It sends aggregates to one or more pluggable backend services (e.g., Graphite).
- Pagerduty:
    - Incident management platform
    - Provides reliable notifications, automatic escalations, on-call scheduling, and more
- OpsGenie: 
    - Alerting and incidence response tool

## Get Started

w/ volume:
```bash
docker run \
    -p 9090:9090 \
    -v /path/to/config:/etc/prometheus \
    prom/prometheus
```

w/ bind mount:
```bash
docker run \
    -p 9090:9090 \
    -v /tmp/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
```

alternative is to bake config into the image:
```bash
FROM prom/prometheus
ADD prometheus.yml /etc/prometheus/
```
*then build & run*

## Configuration
- via:
    - command-line flags
    - a configuration file
- flags for immutable system parameters:
    - storage locations (docker volume?)
    - amount of data to keep on a) disk & b) memory
- file for everything related to scraping:
    - jobs
    - instances
    - which rule files to load
- can reload config at runtime
- reload trigger:   
    - opt 1: `SIGHUP`
    - opt 2: *HTTP POST* `/-/reload` (depends on a flag.)

Configuration (https://prometheus.io/docs/prometheus/latest/configuration/configuration/)
- global config: specifies params valid in all other config contexts. Serve as defaults
- scrape_config: specifies a set of targets and parameters, describes how to scape
    - one scrape config = a single job
    - includes: HTTP resource path, set basic_auth, bearer_token &/OR bearer_token_file, tls config, proxy_url
    - service discovery configurations for:
        - azure, consul, digitalocean, docker swarm, dns, ec2, file, gce, marathon, airbnb nerve, openstack
        - zookeeper, triton
    - labeled statically configured targets
    - relabel config.
    
