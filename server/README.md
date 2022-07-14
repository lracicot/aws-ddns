# Deploy

```
aws cloudformation deploy --capabilities CAPABILITY_NAMED_IAM \
    --template-file template.cfn.yaml \
    --region ca-central-1 \
    --stack-name dynamic-dns-updater \
    --parameter-overrides \
        DomainName=<DOMAIN NAME OF THE ENDPOINT> \
        CertificateArn=<ARN OF THE CERTIFICATE> \
        ApiHostedZoneId=<ZONE ID> \
        HostedZoneId=<ZONE ID> \
        RecordName=<RECORD TO UPDATE>

```
