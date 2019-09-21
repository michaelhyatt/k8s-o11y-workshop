#!/bin/sh -xvf

kubectl create -f secret.yml
kubectl create -f kube-state-metrics
kubectl create -f metricbeat/metricbeat-setup.yml
kubectl create -f filebeat/filebeat-setup.yml

# Wait for metricbeat and filebeat init
kubectl wait --for=condition=complete job/filebeat-init --namespace=kube-system --timeout=-1
kubectl wait --for=condition=complete job/metricbeat-init --namespace=kube-system --timeout==-1

kubectl create -f filebeat/filebeat.yml
kubectl create -f metricbeat/metricbeat.yml
kubectl create -f nginx/nginx.yml
kubectl create -f busybox/busybox.yml

# wait to finish and run some curl commands
kubectl wait --for=condition=available deployments/nginx --timeout=-1
kubectl wait --for=condition=ready pods/busybox --timeout=-1

kubectl exec busybox -- curl nginx-service
kubectl exec busybox -- curl nginx-service/server-status
