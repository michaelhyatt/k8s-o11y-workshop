# Elastic k8s workshop

## Prepare cloud VM
```bash

# Install on cloud Debian9 machines (2 cores 8GB RAM)
```bash
sudo apt install git -y

git clone https://github.com/michaelhyatt/k8s-o11y-workshop.git
cd k8s-o11y-workshop

./install/install-debian9.sh
```

## 1. Start minikube on local machine (not Debian)
```bash
minikube start --kubernetes-version=1.16.0
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
# May say it already exists...
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
