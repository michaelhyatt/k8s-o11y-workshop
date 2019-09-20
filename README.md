# Elastic k8s workshop

## Deploy secrets
Provides connectivity to Elastic cloud
```
# First, copy the template into secret.yml
cp secret.yml.template secret.yml

# Then, create base64 encoded secret values, as following for
# cloud-id, cloud-auth, apm-url, apm-token and update the values in secret.yml
echo -n 'my-app' | base64

# Lastly, create secrets in K8s:
kubectl create -f secret.yml
```

## Start minikube
```
minikube start
```

## Kube-state-metrics
### Deployment
```
kubectl create -f kube-state-metrics
```

## Configure cloud environment
```
kubectl create -f metricbeat/metricbeat-setup.yml
kubectl create -f filebeat/filebeat-setup.yml
```

## NGINX
### Deployment
```
kubectl create -f nginx/nginx.yml
```
### Delete
```
kubectl delete pods -f nginx/nginx.yml
```

## Busybox
###Deployment
```
kubectl create -f busybox/busybox.yml
```

### Invoke busybox curl
```
# Main service
kubectl exec busybox -- curl nginx-service

# server-status end point
kubectl exec busybox -- curl nginx-service/server-status
```

### Delete
```
kubectl delete pods -f busybox/busybox.yml
```

## Filebeat

### Deployment
```
kubectl create -f filebeat/filebeat.yml
```

### Remove
```
kubectl delete -f filebeat/filebeat.yml
```

## Metricbeat

### Deployment
```
kubectl create -f metricbeat/metricbeat.yml
```

### Remove
```
kubectl delete -f metricbeat/metricbeat.yml
