import { z } from "zod"

export const inputParams = {
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).").optional(),
  "cors_enabled": z.boolean().describe("If `true`, cross-origin resource sharing (CORS) is enabled for all origins in the bucket.").optional()
}