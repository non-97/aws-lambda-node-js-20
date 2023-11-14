import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda_nodejs.NodejsFunction(this, "Lambda", {
      entry: path.join(__dirname, "./lambda/handlers/node-js-20-handler.ts"),
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      bundling: {
        minify: true,
        sourceMap: true,
        tsconfig: path.join(__dirname, "./lambda/tsconfig.json"),
        format: cdk.aws_lambda_nodejs.OutputFormat.ESM,
      },
      architecture: cdk.aws_lambda.Architecture.ARM_64,
      logRetention: cdk.aws_logs.RetentionDays.TWO_WEEKS,
      tracing: cdk.aws_lambda.Tracing.ACTIVE,
      timeout: cdk.Duration.seconds(10),
    });
  }
}
