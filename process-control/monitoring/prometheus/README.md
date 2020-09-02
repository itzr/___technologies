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

### What is?

- Consul metrics: 
- Graphite protocol: 
- HaProxy: 
- Memcache: 
- Push acceptor: 
- StatsD: 
- Pagerduty:
- OpsGenie: 
