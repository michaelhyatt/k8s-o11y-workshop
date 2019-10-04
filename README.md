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

# Update install/create_secrets.sh with cloud details
nano install/create_secrets.sh

# Create secrets credentials
./install/create_secrets.sh

# Install the rest
./install/create_all.sh
```

### TODO:
* MySQL slowlog
* prometheus metrics and config
* network analysis with packetbeat
* K8s security with beats
* Security in multi-user multi-namespace deployments
* Use prebuilt ISO to create Strigo environment
* On Exception page, transaction is null, layout template needs fix to forward with port number included
* Redirect at the end of the update is broken
* Load generator
* ML and alerting setup
