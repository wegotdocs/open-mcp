import { z } from "zod"

export const inputParamsSchema = {
  "s3_api_key": z.string().describe("The AWS API key. To use Amazon S3 as your storage provider, you have two authentication options: IAM role or API key. If you do not specify the `s3_api_key` parameter, Stream will use IAM role authentication. In that case make sure to have the correct IAM role configured for your application.").optional(),
  "s3_custom_endpoint_url": z.string().describe("The custom endpoint for S3. If you want to use a custom endpoint, you must also provide the `s3_api_key` and `s3_secret` parameters.").optional(),
  "s3_region": z.string().describe("The AWS region where the bucket is hosted"),
  "s3_secret": z.string().describe("The AWS API Secret").optional()
}