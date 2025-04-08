import { z } from "zod"

export const toolName = `genai_list_datacenter_regions`
export const toolDescription = `List Datacenter Regions`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/regions`
export const method = `get`
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
  "query": [
    "serves_inference",
    "serves_batch"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "serves_inference": z.boolean().describe("Include datacenters that serve inference.").optional(),
  "serves_batch": z.boolean().describe("Include datacenters that are capable of running batch jobs.").optional()
}