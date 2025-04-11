import { z } from "zod"

export const inputParams = {
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).").optional(),
  "cors_enabled": z.boolean().describe("If `true`, the API enables cross-origin resource sharing for all origins on the bucket.").optional()
}