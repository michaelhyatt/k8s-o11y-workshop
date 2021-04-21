#!/bin/bash -xvf

TARGET_NS="default"

DEPLOYMENTS=$(kubectl get deployment -n $TARGET_NS -o name)

kubectl -n $TARGET_NS delete -f agent-config.yml
kubectl -n $TARGET_NS apply -f agent-config.yml

for d in $DEPLOYMENTS
do
  kubectl -n $TARGET_NS patch $d --patch "$(cat agent-patch.yml)"
done