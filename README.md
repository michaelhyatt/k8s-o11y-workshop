# Elastic k8s workshop

## Prepare cloud VM
```bash

# Install on cloud Debian9 machines (2 cores 8GB RAM)
```bash
sudo apt install git -y

git clone https://github.com/michaelhyatt/k8s-o11y-workshop.git
cd k8s-o11y-workshop

./install/install-debian9.sh
cd ~/k8-o11y-workshop

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

### 10. Deploy MySql DB
```bash
kubectl create -f mysql/mysql.yml
```

### 11. Build  and deploy petclinic docker
```bash
# If running on minikube, point it to the minikube docker daemon
eval $(minikube docker-env)

docker build -t petclinic docker/petclinic

kubectl create -f petclinic/petclinic.yml
```

### 11a. Open petclinic service in the browser through minikube
```bash
minikube service petclinic-service
```

### May need RUM enabled on APM server in the cloud
```
apm-server.rum.enabled=true
```

### TODO:
* Fix for multiline java errors
* NGINX config
* MySQL slowlog
* prometheus metrics and config
* network analysis with pcketbeat
* K8s security with beats
* Security in multi-user multi-namespace deployments
* Use prebuilt ISO to create Strigo environment
