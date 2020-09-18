https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/

- use cronjobs to run jobs

monitor guide 1: https://medium.com/@tristan_96324/prometheus-k8s-cronjob-alerts-94bee7b90511
monitor guide 2: https://github.com/scottsbaldwin/k8s-cronjob-monitoring-talk/blob/master/k8s-cronjob-monitoring.md

https://github.com/kubernetes/kube-state-metrics/blob/master/docs/cronjob-metrics.md

Warning, best to disable with Istio due to complications: 
```
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  ...
spec:
  ...
  jobTemplate:
    spec:
      template:
        metadata:
          annotations:
            # disable istio on the pod due to this issue:
            # https://github.com/istio/istio/issues/11659
            sidecar.istio.io/inject: "false"
```
