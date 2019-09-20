# Elastic k8s workshop

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
kubectl create busybox/busybox.yml
```

### Invoke busybox curl
```
kubectl exec busybox -- curl nginx-service
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
