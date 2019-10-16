# Elastic k8s workshop

## Prepare cloud VM
```bash

# Install on cloud Debian9 machines (2 cores 8GB RAM) - Strigo, GCP, etc
sudo apt install git -y

git clone https://github.com/michaelhyatt/k8s-o11y-workshop.git
cd k8s-o11y-workshop

./install/install-debian9.sh
cd ~/k8-o11y-workshop

# Run build ahead of the rest
docker build -t petclinic docker/petclinic
```
## Elastic Cloud
Create cloud cluster and record the following to be populated in `install/create_secrets.sh` script:
```
cloud_id=...
cloud_auth=...
apm_url=...
apm_token=...
```

### Labs: Prepare the server
```bash
# Start minikube locally
cd ~/k8s-o11y-workshop
./install/start_minikube.sh

# Create secrets credentials
./install/create_secrets.sh
```

### Labs
```bash

# Run metricbeat setup and wait for it to complete
kubectl create -f metricbeat/metricbeat-setup.yml
kubectl wait --for=condition=complete job/metricbeat-init --namespace=kube-system --timeout=30m

# Run filebeat setup and wait for it to complete
kubectl create -f filebeat/filebeat-setup.yml
kubectl wait --for=condition=complete job/filebeat-init --namespace=kube-system --timeout=30m

# Run packetbeat setup and wait for it to complete
kubectl create -f packetbeat/packetbeat-setup.yml
kubectl wait --for=condition=complete job/packetbeat-init --namespace=kube-system --timeout=30m

# Deploy metricbeat, filebeat and packetbeat
kubectl create -f filebeat/filebeat.yml
kubectl create -f metricbeat/metricbeat.yml
kubectl create -f packetbeat/packetbeat.yml

# Deploy MySQL DB
kubectl create -f mysql/mysql.yml

# Deploy petclinic and nginx
kubectl create -f petclinic/petclinic.yml
kubectl create -f nginx/nginx.yml

```

### TODO:
* MySQL slowlog
* K8s security with beats
* Security in multi-user multi-namespace deployments
* On Exception page, transaction is null, layout template needs fix to forward with port number included
* Redirect at the end of the update is broken
* Load generator
* ML and alerting setup
