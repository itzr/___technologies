# GET STARTED
run container: `docker run -p 9115:9115 prom/blackbox-exporter`
whitebox monitoring: `curl 'localhost:9115/metrics'`
blackbox monitoring:
	- requirements: target and module pararmeters in GET request
		- target => URI or IP
		- module => defined in exporter's config
query prometheus.io: `curl 'localhost:9115/probe?target=prometheus.io&module=http_2xx'`
# CONFIGURE MODULES
*predefined in a file inside the docker container called `config.yml`
get template file: `curl -o blackbox.yml https://raw.githubusercontent.com/prometheus/blackbox_exporter/master/blackbox.yml`
