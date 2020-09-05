Overwrite the boilerplate kong chart.

Command 1 (on upgrade): 
```
helm upgrade \
--values config.yaml \
<release_name> <chart_repo>/<chart_name>
```
Command 2 (on install):
or
`helm install kong/kong \
 --generate-name \
 --set ingressController.installCRDs=false \
 -f config.yaml`

*To get release names*:`helm list`
