#!/bin/sh -vx

alias k="kubectl"
alias kgp="kubectl get pods"
alias kgps="kubectl get pods --namespace=kube-system"
alias kd="kubectl delete -f"
alias kds="kubectl delete --namespace=kube-system -f"
alias kc="kubectl create -f"
alias kcs="kubectl create --namespace=kube-system -f"
alias kg="kubectl get"
alias kshell="kubectl run -it --rm --restart=Never alpine --image=alpine sh"
