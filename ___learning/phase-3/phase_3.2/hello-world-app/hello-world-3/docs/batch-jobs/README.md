### Issue: Setting up CronJobs with Istio:
- https://stackoverflow.com/questions/54921054/terminate-istio-sidecar-istio-proxy-for-a-kubernetes-job-cronjob
- https://github.com/istio/istio/issues/6324

##### Temporary Fix from Istio
- Work around using /quitquitquit endpoint

- Example: 
    - Modify your entrypoint to make a call to the proxy container asking it to shut itself down:

example one
```
containers:
   command: ["/bin/bash", "-c", "/path/to/your/main/entrypoint && curl -X POST http://localhost:15020/quitquitquit"]
```
example two in the pod spec (https://github.com/istio/istio/issues/11659): 
```
    command: ["/bin/bash", "-c"]
    args:
      - |
        trap "curl --max-time 2 -s -f -XPOST http://127.0.0.1:15000/quitquitquit" EXIT
        while ! curl -s -f http://127.0.0.1:15020/healthz/ready; do sleep 1; done
        sleep 2
        {{ $.Values.cron.command }}
```
- Wait for proxy to be ready
- Tell it to quit when done

##### Temporary fix 
Issue: https://github.com/kubernetes/kubernetes/issues/25908
Solution (most up votes): https://github.com/kubernetes/kubernetes/issues/25908
```
containers:
  - name: main
    image: gcr.io/some/image:latest
    command: ["/bin/bash", "-c"]
    args:
      - |
        trap "touch /tmp/pod/main-terminated" EXIT
        /my-batch-job/bin/main --config=/config/my-job-config.yaml
    volumeMounts:
      - mountPath: /tmp/pod
        name: tmp-pod
  - name: envoy
    image: gcr.io/our-envoy-plus-bash-image:latest
    command: ["/bin/bash", "-c"]
    args:
      - |
        /usr/local/bin/envoy --config-path=/my-batch-job/etc/envoy.json &
        CHILD_PID=$!
        (while true; do if [[ -f "/tmp/pod/main-terminated" ]]; then kill $CHILD_PID; fi; sleep 1; done) &
        wait $CHILD_PID
        if [[ -f "/tmp/pod/main-terminated" ]]; then exit 0; fi
    volumeMounts:
      - mountPath: /tmp/pod
        name: tmp-pod
        readOnly: true
volumes:
  - name: tmp-pod
    emptyDir: {}
```

##### Temporary fix from Monzo:
 
- https://github.com/monzo/envoy-preflight

### ISSUES (Domino Effect)
Creates Linear Memory Growth on Istio-Proxy:
    - https://github.com/istio/istio/issues/24058
      
See "Hacky" workaround solution by scrolling down.
You have to make edits to the 'sidecar injection template'.

True fix: https://github.com/istio/istio/pull/27195

#### Longer Term Solution 
Dependencies:
    - https://github.com/istio/istio/issues/11366
    - https://github.com/kubernetes/kubernetes/issues/65502
