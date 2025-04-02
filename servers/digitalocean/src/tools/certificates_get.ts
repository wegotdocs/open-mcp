import { z } from "zod"

export const toolName = `certificates_get`
export const toolDescription = `Retrieve an Existing Certificate`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/certificates/{certificate_id}`
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
    "certificate_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "certificate_id": z.string().uuid().describe("A unique identifier for a certificate.") }).shape