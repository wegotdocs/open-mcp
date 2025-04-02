import { z } from "zod"

export const toolName = `genai_create_knowledge_base_data_source`
export const toolDescription = `Add Data Source to a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "knowledge_base_uuid"
  ],
  "cookie": [],
  "body": [
    "file_upload_data_source",
    "b_knowledge_base_uuid",
    "spaces_data_source"
  ]
}
export const flatMap = {
  "b_knowledge_base_uuid": "knowledge_base_uuid"
}

export const inputParams = z.object({ "knowledge_base_uuid": z.string().describe("Knowledge base id"), "file_upload_data_source": z.object({ "original_file_name": z.string().describe("The original file name").optional(), "size_in_bytes": z.string().describe("The size of the file in bytes").optional(), "stored_object_key": z.string().describe("The object key the file was stored as").optional() }).describe("File to upload as data source for knowledge base.").optional(), "b_knowledge_base_uuid": z.string().describe("Knowledge base id").optional(), "spaces_data_source": z.object({ "bucket_name": z.string().describe("Spaces bucket name").optional(), "item_path": z.string().optional(), "region": z.string().describe("Region of bucket").optional() }).describe("Spaces Bucket Data Source").optional() }).shape