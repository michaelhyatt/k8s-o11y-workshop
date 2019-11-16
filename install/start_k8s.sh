#!/bin/sh -xv

sudo minikube start --kubernetes-version=1.16.2 --vm-driver=none --extra-config=kubelet.read-only-port=10255
rm -rf $HOME/.kube/ $HOME/.minikube/
sudo mv /root/.kube /root/.minikube $HOME
sudo chown -R $USER $HOME/.kube $HOME/.minikube
sed -i 's|root|home/admin|g' $HOME/.kube/config

kubectl create -f $HOME/k8s-o11y-workshop/kube-state-metrics

kubectl create -f $HOME/k8s-o11y-workshop/theia/theia.yml

# to install aliases
# source $HOME/k8s-o11y-workshop/install/aliases.sh
