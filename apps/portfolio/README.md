## Serve / Develop

```shell
nx serve portfolio --configuration=production
```

## Build prod

```shell
BUILD_TARGET=lambda nx build-ssr portfolio --configuration=production --verbose
```

### Deploy prod

```shell
#lambda
serverless deploy --stage production

# JS Files
aws s3 sync dist/apps/portfolio/browser/ s3://danduh-portfolio/js \
      --delete --profile danduh \
      --cache-control max-age=3600 --acl public-read

# Assets
aws s3 sync dist/apps/portfolio/browser/assets/ s3://danduh-portfolio/assets --profile danduh --acl public-read

#Invalidate CF
aws cloudfront create-invalidation \
    --distribution-id EGWRP34MG29P5 \
    --paths "/" "/*" "/*.*" --profile danduh
```
