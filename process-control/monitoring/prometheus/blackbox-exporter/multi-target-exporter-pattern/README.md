### Multi-target exporter pattern

- Exporter get target's metrics via a network protocol
- Exporter does not have to run on the same machine as the target
- Exporter gets targets and query config as parameters of Prometheus' GET request
- Exporter starts to scrape after getting Prometehus' GET request
- Exporter can query multiple targets

### Use cases

Used for: blackbox & the SNMP exporter..
