# Elastic k8s workshop

## Prepare cloud VM
```bash

# Install git and kubectl
sudo apt-get update
sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates wget software-properties-common
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get install -y kubectl git
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# Install minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
sudo install minikube /usr/local/bin

# Install docker
wget https://download.docker.com/linux/debian/gpg
sudo apt-key add gpg
echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee -a /etc/apt/sources.list.d/docker.list
sudo apt-cache policy docker-ce
sudo apt update
sudo apt-get -y install docker-ce
sudo systemctl start docker

sudo gpasswd -a $USER docker


git clone https://github.com/michaelhyatt/k8s-o11y-workshop.git
cd k8s-o11y-workshop

```

## 1. Start minikube
```bash
minikube start --kubernetes-version=1.16.0

# Or, on Linux cloud machines
sudo minikube start --kubernetes-version=1.16.0 --vm-driver=none
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
