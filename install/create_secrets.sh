#!/bin/sh -xvf

# Delete old secrets
kubectl delete secret logging-cloud-secret
kubectl delete secret cloud-secret
kubectl delete secret cloud-secret --namespace=kube-system
kubectl delete secret apm-secret

# test1
cloud_id=test1:YXVzdHJhbGlhLXNvdXRoZWFzdDEuZ2NwLmVsYXN0aWMtY2xvdWQuY29tJGQzYmVjNmRmNjkzZTQ0M2NiZjA2ZTNlMzhiOTRlMDdhJDRmMGQyNGZjY2FlNDRhOTFhYTQyMmFhZWFmODBjMDUw
cloud_auth=elastic:uoPmf3YE8tIAEZj6dc1Xrh1T
apm_url=https://9dfaf44709454970b474a37e08332a82.apm.australia-southeast1.gcp.elastic-cloud.com
apm_token=lwARhYoL8O480XpXJU


# logging cluster
logging_cloud_id=logging-cluster-1:YXVzdHJhbGlhLXNvdXRoZWFzdDEuZ2NwLmVsYXN0aWMtY2xvdWQuY29tJDdjYjRhZWJiNzcyNjRiM2ZhNTVhNzcyMGVhZGQyMTg2JDJkMzUxMWI3N2VjODQzOTdiMmYxMGJlZDc1ZmZmY2Uw
logging_cloud_auth=elastic:dKHrftOaM04LU2AYHJaLPjXO

# Main cluster
kubectl create secret generic cloud-secret --namespace=kube-system --from-literal=cloud-id=${cloud_id} --from-literal=cloud-auth=${cloud_auth}
kubectl create secret generic cloud-secret --from-literal=cloud-id=${cloud_id} --from-literal=cloud-auth=${cloud_auth}
kubectl create secret generic apm-secret --from-literal=apm-url=${apm_url} --from-literal=apm-token=${apm_token}

# Monitoring cluster
kubectl create secret generic logging-cloud-secret --from-literal=cloud-id=${logging_cloud_id} --from-literal=cloud-auth=${logging_cloud_auth}
