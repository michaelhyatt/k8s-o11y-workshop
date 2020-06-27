#!/bin/sh -xvf

# Delete old secrets
kubectl delete secret cloud-secret
kubectl delete secret cloud-secret --namespace=kube-system
kubectl delete secret apm-secret

# Here go the values
cloud_id=...
cloud_auth=...
apm_url=...
apm_token=...

kubectl create secret generic cloud-secret --namespace=kube-system --from-literal=cloud-id=${cloud_id} --from-literal=cloud-auth=${cloud_auth}
kubectl create secret generic cloud-secret --from-literal=cloud-id=${cloud_id} --from-literal=cloud-auth=${cloud_auth}
kubectl create secret generic apm-secret --from-literal=apm-url=${apm_url} --from-literal=apm-token=${apm_token}
