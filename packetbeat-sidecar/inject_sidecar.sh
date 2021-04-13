#!/bin/bash -xvf

TARGET_NS="default"

DEPLOYMENTS=$(kubectl get deployment -n $TARGET_NS -o name)

kubectl -n $TARGET_NS delete -f packetbeat-config-patch.yml
kubectl -n $TARGET_NS apply -f packetbeat-config-patch.yml

for d in $DEPLOYMENTS
do
  kubectl -n $TARGET_NS patch $d --patch "$(cat packetbeat-patch.yml)"
done