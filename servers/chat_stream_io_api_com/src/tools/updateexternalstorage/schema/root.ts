import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "aws_s3": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `aws_s3` to the tool, first call the tool `expandSchema` with \"/properties/aws_s3\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Only required if you want to create an Amazon S3 storage</property-description>").optional(),
  "azure_blob": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `azure_blob` to the tool, first call the tool `expandSchema` with \"/properties/azure_blob\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Only required if you want to create an Azure Blob Storage</property-description>").optional(),
  "bucket": z.string().describe("The name of the bucket on the service provider"),
  "gcs_credentials": z.string().optional(),
  "path": z.string().describe("The path prefix to use for storing files").optional(),
  "storage_type": z.enum(["s3","gcs","abs"]).describe("The type of storage to use")
}