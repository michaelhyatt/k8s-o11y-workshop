# Deploying APM server locally

## Intro
This is a setup to create a local deployment of APM server that uses the Logstash proxy to communicate with Elastic Cloud.

## Add helm chart repo
```
helm repo add elastic https://helm.elastic.co
```

### Prerequisite - create the cloud secrets
Update the cloud connection details in the following script and run it.
```
../install/create_secrets.sh
```

### Install the apm in your cluster
```
helm install apm-server elastic/apm-server -f values.yaml
```
