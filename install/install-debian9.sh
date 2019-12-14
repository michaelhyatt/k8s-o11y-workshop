#!/bin/sh -xvf

sudo apt-get update
sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates wget software-properties-common
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl

# Install minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
sudo install minikube /usr/local/bin

# Install docker
wget https://download.docker.com/linux/debian/gpg
sudo apt-key add gpg
echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee -a /etc/apt/sources.list.d/docker.list
sudo apt update
sudo apt-cache policy docker-ce
sudo apt-get -y install docker-ce
sudo systemctl start docker

ME=$(whoami)
#
# # Make sure it is running as admin user
# if [ $ME != "admin" ]
# then
#    echo not admin
#    sudo deluser admin
#    sudo adduser --home /home/admin --disabled-password --disabled-login --quiet --gecos "" admin
#    sudo usermod -aG sudo admin
#    sudo gpasswd -a admin docker
#    sudo cp -R $HOME/k8s-o11y-workshop /home/admin
#    sudo chown -R admin:admin /home/admin/k8s-o11y-workshop
#    sudo chmod -R ogu+rw /home/admin/k8s-o11y-workshop
#    sudo su - admin
# fi

sudo usermod -g docker $ME

newgrp - docker
