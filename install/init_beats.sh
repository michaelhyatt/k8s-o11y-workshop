#!/bin/sh -xv

# Run metricbeat setup and wait for it to complete
kubectl create -f $HOME/k8s-o11y-workshop/metricbeat/metricbeat-setup.yml
kubectl wait --for=condition=complete job/metricbeat-init --namespace=kube-system --timeout=30m

# Run filebeat setup and wait for it to complete
kubectl create -f $HOME/k8s-o11y-workshop/filebeat/filebeat-setup.yml
kubectl wait --for=condition=complete job/filebeat-init --namespace=kube-system --timeout=30m

# Run packetbeat setup and wait for it to complete
kubectl create -f $HOME/k8s-o11y-workshop/packetbeat/packetbeat-setup.yml
kubectl wait --for=condition=complete job/packetbeat-init --namespace=kube-system --timeout=30m
