import { z } from "zod"

export const toolName = `domains_get_record`
export const toolDescription = `Retrieve an Existing Domain Record`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/domains/{domain_name}/records/{domain_record_id}`
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
  "query": [],
  "header": [],
  "path": [
    "domain_name",
    "domain_record_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "domain_name": z.string().describe("The name of the domain itself."), "domain_record_id": z.number().int().describe("The unique identifier of the domain record.") }).shape