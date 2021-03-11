*Guide: https://prometheus.io/docs/guides/multi-target-exporter/*

# GET STARTED
run container: `docker run -p 9115:9115 prom/blackbox-exporter`
whitebox monitoring: `curl 'localhost:9115/metrics'`
blackbox monitoring:
	- requirements: target and module pararmeters in GET request
		- target => URI or IP
		- module => defined in exporter's config
query prometheus.io: `curl 'localhost:9115/probe?target=prometheus.io&module=http_2xx'`
# CONFIGURE MODULES
*predefined in a file inside the docker container called `config.yml`*

get template file: `curl -o blackbox.yml https://raw.githubusercontent.com/prometheus/blackbox_exporter/master/blackbox.yml`

*add to blackbox.yml*
---
http_2xx:
	...
	http:
		preferred_ip_protocol: "ip4"
	...
---

run container with mount & config: 
```bash
docker \
  run -p 9115:9115 \
  --mount type=bind,source="$(pwd)"/blackbox.yml,target=/blackbox.yml,readonly \
  prom/blackbox-exporter \
  --config.file="/blackbox.yml"
```

probe: `curl 'localhost:9115/probe?target=prometheus.io&module=http_2xx'`

# Query Multi-Target Exporters with Prometheus

- tell prometheus to do the queries for us
- see ./prometheus.yml
- run prometheus (also on Docker):
***MACOS/WINDOWS***
```bash
docker \
  run -p 9090:9090 \
  --mount type=bind,source="$(pwd)"/prometheus.yml,target=/prometheus.yml,readonly \
  prom/prometheus \
  --config.file="/prometheus.yml"
```

**LINUX**
```bash
docker \
  run --network="host"\
  --mount type=bind,source="$(pwd)"/prometheus.yml,target=/prometheus.yml,readonly \
  prom/prometheus \
  --config.file="/prometheus.yml"
```
validate: `localhost:9090/targets` - should see a 'blackbox' endpoint in UP state

# Relabeling 
see: prometheus.yml
more reading: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#%3Crelabel_config

probe (before relabels): `http://prometheus.io/probe?module=http_2xx"`
probe (after relabels): `http://localhost:9115/probe?target=http://prometheus.io&module=http_2xx`
good explanation at the bottom: https://prometheus.io/docs/guides/multi-target-exporter/
