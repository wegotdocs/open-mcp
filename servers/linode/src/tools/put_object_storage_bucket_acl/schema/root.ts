import { z } from "zod"

export const inputParams = {
  "acl": z.enum(["private","public-read","authenticated-read","public-read-write","custom"]).describe("The S3 predefined collection of grantees and permissions set for the bucket, also referred to as a [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl)."),
  "name": z.string().describe("The name of the object where access control list (ACL) settings will be updated. Run the [List Object Storage bucket contents](https://techdocs.akamai.com/linode-api/reference/get-object-storage-bucket-content) operation to access all object names in a bucket.")
}