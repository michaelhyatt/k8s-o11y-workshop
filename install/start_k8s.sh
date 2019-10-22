#!/bin/sh -xv

ME=$(whoami)

# Make sure it is running as admin user
if [ $ME != "admin" ]
then
   echo not admin
   sudo deluser admin
   sudo adduser --home /home/admin --disabled-password --disabled-login --quiet --gecos "" admin
   sudo usermod -aG sudo admin
   sudo su - admin
fi

sudo minikube start --kubernetes-version=1.16.0 --vm-driver=none
rm -rf $HOME/.kube/ $HOME/.minikube/
sudo mv /root/.kube /root/.minikube $HOME
sudo chown -R $USER $HOME/.kube $HOME/.minikube
sed -i 's|root|home/admin|g' $HOME/.kube/config

kubectl create -f $HOME/k8s-o11y-workshop/kube-state-metrics

kubectl create -f $HOME/k8s-o11y-workshop/theia/theia.yml

. $HOME/k8s-o11y-workshop/install/aliases.sh
