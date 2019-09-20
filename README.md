# Elastic k8s workshop

## 1. Start minikube
```bash
minikube start
```

## 2. Deploy secrets
Provides connectivity to Elastic cloud
```bash
# First, copy the template into secret.yml
cp secret.yml.template secret.yml

# Then, create base64 encoded secret values, as following for
# cloud-id, cloud-auth, apm-url, apm-token and update the values in secret.yml
# Make sure to join long strings into one.
echo -n 'my-app' | base64


# Lastly, create secrets in K8s:
kubectl create -f secret.yml
```

## 3. Kube-state-metrics Deployment
```bash
kubectl create -f kube-state-metrics
```

## 4. Configure cloud environment
```bash
kubectl create -f metricbeat/metricbeat-setup.yml
kubectl create -f filebeat/filebeat-setup.yml
```

## 5. Filebeat deployment
```bash
kubectl create -f filebeat/filebeat.yml
```

## 6. Metricbeat deployment
```bash
kubectl create -f metricbeat/metricbeat.yml
```

## 7. NGINX deployment
```bash
kubectl create -f nginx/nginx.yml
```

## 8. Busybox deployment
```bash
kubectl create -f busybox/busybox.yml
```

### 9. Invoke busybox curl
```bash
# Main service
kubectl exec busybox -- curl nginx-service

# server-status end point
kubectl exec busybox -- curl nginx-service/server-status
```
