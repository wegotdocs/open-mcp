import { z } from "zod"

export const inputParamsSchema = {
  "credentials": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `credentials` to the tool, first call the tool `expandSchema` with \"/properties/config/properties/credentials\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credentials for an OpenSearch cluster user. Optional if `cluster_uuid` is passed.</property-description>").optional(),
  "endpoint": z.string().describe("host of the OpenSearch cluster"),
  "cluster_uuid": z.string().describe("A unique identifier for a managed OpenSearch cluster.").optional(),
  "cluster_name": z.string().describe("Name of a managed OpenSearch cluster.").optional(),
  "index_name": z.string().describe("OpenSearch index to send logs to.").optional(),
  "retention_days": z.number().int().describe("Number of days to retain logs in an OpenSearch cluster.").optional()
}