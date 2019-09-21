#!/bin/sh +xvf

kubectl delete -f secret.yml
kubectl delete -f kube-state-metrics
kubectl delete -f metricbeat/metricbeat-setup.yml
kubectl delete -f filebeat/filebeat-setup.yml
kubectl delete -f filebeat/filebeat.yml
kubectl delete -f metricbeat/metricbeat.yml
kubectl delete -f nginx/nginx.yml
kubectl delete -f busybox/busybox.yml
