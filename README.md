# Elastic k8s workshop

## Prepare cloud VM
```bash
# Install on cloud Debian9 machines (2 cores 8GB RAM) - Strigo, GCP, etc
sudo apt install git -y

git clone https://github.com/michaelhyatt/k8s-o11y-workshop.git
cd k8s-o11y-workshop

./install/install-debian9.sh
cd ~/k8s-o11y-workshop

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
$HOME/k8s-o11y-workshop/install/start_k8s.sh

# Update with Cloud cluster details and create secrets credentials
# Use vi, nano, Theia (as below)
nano $HOME/k8s-o11y-workshop/install/create_secrets.sh
$HOME/k8s-o11y-workshop/install/create_secrets.sh

# Init Kibana, Elasticsearch mappings and templates
$HOME/k8s-o11y-workshop/install/init_beats.sh
```

### Labs
```bash

# Deploy metricbeat, filebeat and packetbeat
kubectl create -f $HOME/k8s-o11y-workshop/filebeat/filebeat.yml
kubectl create -f $HOME/k8s-o11y-workshop/metricbeat/metricbeat.yml
kubectl create -f $HOME/k8s-o11y-workshop/packetbeat/packetbeat.yml

# Deploy MySQL DB
kubectl create -f $HOME/k8s-o11y-workshop/mysql/mysql.yml

# Deploy petclinic and nginx
kubectl create -f $HOME/k8s-o11y-workshop/petclinic/petclinic.yml
kubectl create -f $HOME/k8s-o11y-workshop/nginx/nginx.yml

```

## Open code editor
Use the public DNS and port 30083 to access web based Theia editor
http://public-dns-or-ip-address:30083

## Petclinic UI
Use the public DNS and port 30080 to access petclinic UI
http://public-dns-or-ip-address:30080

## Run Jupyter connected to Elastic Cloud cluster
Start Jupyter pod:
```bash
kubectl create --namespace=kube-system -f $HOME/k8s-o11y-workshop/jupyter/jupyter.yml
```
Use the public DNS and port 30081 to access the Jupyter UI
http://public-dns-or-ip-address:30081. Example notebook `scripts/example.ipynb` shows how to connect to Elastic Cloud cluster and use the data in pandas.

### TODO:
* MySQL slowlog
* K8s security with beats
* Security in multi-user multi-namespace deployments
* On Exception page, transaction is null, layout template needs fix to forward with port number included
* Redirect at the end of the update is broken
* Load generator
* ML and alerting setup
