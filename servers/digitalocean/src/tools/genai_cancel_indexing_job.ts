import { z } from "zod"

export const toolName = `genai_cancel_indexing_job`
export const toolDescription = `Cancel Indexing Job for a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/indexing_jobs/{uuid}/cancel`
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
    "b_uuid"
  ]
}
export const flatMap = {
  "b_uuid": "uuid"
}

export const inputParams = {
  "uuid": z.string().describe("A unique identifier for an indexing job."),
  "b_uuid": z.string().describe("A unique identifier for an indexing job.").optional()
}