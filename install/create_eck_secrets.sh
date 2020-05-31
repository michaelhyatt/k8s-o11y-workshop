#!/bin/sh -xvf

# Delete old secrets, if any
kubectl delete secret eck-secret
kubectl delete secret eck-secret --namespace=kube-system

# Get Elasticsearch password from ECK
ELASTIC_PASSWORD=$(kubectl get secret quickstart-es-elastic-user -o=jsonpath='{.data.elastic}' | base64 --decode)

APM_TOKEN=$(kubectl get secret/quickstart-apm-token -o go-template='{{index .data "secret-token" | base64decode}}')

kubectl create secret generic eck-secret --namespace=kube-system --from-literal=elastic-password=${ELASTIC_PASSWORD} --from-literal=apm-token=${APM_TOKEN}
kubectl create secret generic eck-secret --from-literal=elastic-password=${ELASTIC_PASSWORD} --from-literal=apm-token=${APM_TOKEN}
