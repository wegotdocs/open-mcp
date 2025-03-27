import { z } from "zod"

export const toolName = `get_bill_attachment`
export const toolDescription = `Get bill attachment`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/data/bills/{billId}/attachments/{attachmentId}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "path": z.object({ "attachmentId": z.string().uuid().describe("Unique identifier for an attachment") }).optional() }).shape