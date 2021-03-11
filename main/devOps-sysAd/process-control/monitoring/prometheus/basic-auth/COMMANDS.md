get nginx: `docker pull nginx`
run docker:
*many -v should be :ro, but for dev purposes it has been removed*

```bash
docker run --name test-nginx \
-v $(pwd)/hello.txt:/usr/share/nginx/html/hello.txt:ro \
-v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
-v $(pwd)/prometheus.yml:/root/prometheus.yml \
-v $(pwd)/basic-install-prometheus.sh:/root/install-prom.sh \
-v $(pwd)/run-prom.sh:/root/run-prom.sh \
-d -p 12321:80 nginx
```
*inside the container*:
all in one: `apt-get update && apt-get install apache2-utils && apt-get install vim`
make .sh script exeutable: `chmod +x /root/install-prom.sh`
make .sh script exeutable: `chmod +x /root/run-prom.sh`
exec .sh: `./install-prom.sh`
exec .sh: `./run-prom.sh`

