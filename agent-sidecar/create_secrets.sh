kibana_url=...
enrollment_token=...

kubectl delete secret agent-secret

kubectl create secret generic agent-secret \
    --from-literal=kibana-url=${kibana_url} \
    --from-literal=enrollment-token=${enrollment_token}