prometheus \
  --config.file=/root/prometheus.yml \
  --web.external-url=http://localhost:12321/prometheus \
  --web.route-prefix="/" \
  --storage.tsdb.path /var/lib/prometheus/ \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries

