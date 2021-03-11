deploy one function only: `serverless deploy function -f list`
deploy speccing stage & region:
- `AWS_PROFILE=development serverless deploy --stage dev --region us-east-1` 

deploy lambda functions using serverless:
`$ AWS_PROFILE=production serverless deploy --stage prod --region us-east-1`
deploy AWS infrastructure using CDK via SST (serverless stack toolkit):
`AWS_PROFILE=production npx sst deploy --stage prod --region us-east-1`
*the above two commands can be used together*
