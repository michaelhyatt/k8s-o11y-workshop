#!/bin/sh -xvf

kubectl delete -f metricbeat/metricbeat-setup.yml
kubectl delete -f filebeat/filebeat-setup.yml
kubectl delete -f filebeat/filebeat.yml
kubectl delete -f metricbeat/metricbeat.yml
kubectl delete -f mysql/mysql.yml
kubectl delete -f petclinic/petclinic.yml
kubectl delete -f nginx/nginx.yml
