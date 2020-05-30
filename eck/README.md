# Starting Elastic Cloud on Kubernetes

## Deploy the operator
```
% kubectl apply -f https://download.elastic.co/downloads/eck/1.1.2/all-in-one.yaml
```

## Elastic cluster deployment
### Deploy elasticsearch
```
% kubectl apply -f elasticsearch.yml
elasticsearch.elasticsearch.k8s.elastic.co/quickstart created
```

### Check elasticsearch is running
```
% kubectl get elasticsearch
NAME         HEALTH   NODES   VERSION   PHASE   AGE
quickstart   green    3       7.7.0     Ready   4m31s

% kubectl get service quickstart-es-http
NAME                 TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
quickstart-es-http   ClusterIP   10.23.86.20   <none>        9200/TCP   5m2s
```

### Deploy kibana
```
% kubectl apply -f eck/kibana.yml
kibana.kibana.k8s.elastic.co/quickstart created
```

### Check kibana is running
```
% kubectl get kibana
NAME         HEALTH   NODES   VERSION   AGE
quickstart   green    1       7.7.0     2m18s

% kubectl get service quickstart-kb-http
NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)          AGE
quickstart-kb-http   LoadBalancer   10.33.66.107   35.121.12.172   5601:32401/TCP   9m46s
```

### Get kibana password
```
% kubectl get secret quickstart-es-elastic-user -o=jsonpath='{.data.elastic}' | base64 --decode; echo
```

### Deploy APM ApmServer
```
% kubectl apply -f apm_server.yml
apmserver.apm.k8s.elastic.co/quickstart created
```

### Check status
```
% kubectl get apm
NAME         HEALTH   NODES   VERSION   AGE
quickstart   green    1       7.7.0     2m58s
```
### Get APM server token
```
kubectl get secret/quickstart-apm-token -o go-template='{{index .data "secret-token" | base64decode}}'
```
