#!/bin/sh -xvf


kubectl create -f kube-state-metrics
kubectl create -f metricbeat/metricbeat-setup.yml
kubectl create -f filebeat/filebeat-setup.yml
kubectl create -f packetbeat/packetbeat-setup.yml

# Wait for metricbeat and filebeat init
kubectl wait --for=condition=complete job/filebeat-init --namespace=kube-system --timeout=30m
kubectl wait --for=condition=complete job/metricbeat-init --namespace=kube-system --timeout=30m
kubectl wait --for=condition=complete job/packetbeat-init --namespace=kube-system --timeout=30m

kubectl create -f filebeat/filebeat.yml
kubectl create -f metricbeat/metricbeat.yml
kubectl create -f packetbeat/packetbeat.yml
# kubectl create -f nginx/nginx.yml
# kubectl create -f busybox/busybox.yml

# wait to finish and run some curl commands
# kubectl wait --for=condition=available deployments/nginx --timeout=30m
# kubectl wait --for=condition=ready pods/busybox --timeout=30m
#
# kubectl exec busybox -- curl nginx-service
# kubectl exec busybox -- curl nginx-service/server-status

# deploy mysql DB
kubectl create -f mysql/mysql.yml

# build  and deploy petclinic docker
# If running on minikube, point it to the minikube docker daemon
# eval $(minikube docker-env)

docker build -t petclinic docker/petclinic

kubectl create -f petclinic/petclinic.yml

kubectl create -f nginx/nginx.yml
