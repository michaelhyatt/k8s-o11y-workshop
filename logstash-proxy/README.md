# Deploying Logstash proxy for reliable message delivery to Elastic Cloud

## Intro
Often people use message bus as a way of decoupling the agents (beats, etc) from their Elasticsearch clusters. This is done to allow bringing down the cluster without losing messages, smoothing ingest volumes spikes and allowing the cluster to catch up with bursts of data. Running your own messaging systems, such as Kafka or RabbitMQ is an expensive and time consuming task on its own and can be an entirely new undertaking for the team, unless they are familiar with it already and are using it for inter-component communication. This post will show how Logstash can be used to remove the need for a full blown messaging layer between your beats and Elastic Cloud. You can use it with other components, such as APM agents, etc.

## Helm charts
I decided to release the Logstash setup as a Helm chart. Add elastic Helm chart repo:
```
helm repo add elastic https://helm.elastic.co
```

### Prerequisite - create the cloud secrets
Update the cloud connection details in the following script and run it.
```
../install/create_secrets.sh
```

### Install Logstash in your cluster
```
helm install beats-proxy elastic/logstash -f values.yaml
```

## References
