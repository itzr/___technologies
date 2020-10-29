# GOTCHA

`npx sst add-cdk @aws-cdk/aws-dynamodb`

The reason we are using the add-cdk command instead of using an npm install, is because of a known issue with AWS CDK. Using mismatched versions of CDK packages can cause some unexpected problems down the road. The sst add-cdk command ensures that we install the right version of the package.
