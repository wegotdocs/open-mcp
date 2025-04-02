import { z } from "zod"

export const toolName = `genai_update_knowledge_base`
export const toolDescription = `Update a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/knowledge_bases/{uuid}`
export const method = `put`
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
    "uuid"
  ],
  "cookie": [],
  "body": [
    "database_id",
    "embedding_model_uuid",
    "name",
    "project_id",
    "tags",
    "b_uuid"
  ]
}
export const flatMap = {
  "b_uuid": "uuid"
}

export const inputParams = z.object({ "uuid": z.string().describe("Knowledge base id"), "database_id": z.string().describe("The id of the DigitalOcean database this knowledge base will use, optiona.").optional(), "embedding_model_uuid": z.string().describe("Identifier for the foundation model.").optional(), "name": z.string().describe("Knowledge base name").optional(), "project_id": z.string().describe("The id of the DigitalOcean project this knowledge base will belong to").optional(), "tags": z.array(z.string()).describe("Tags to organize your knowledge base.").optional(), "b_uuid": z.string().describe("Knowledge base id").optional() }).shape