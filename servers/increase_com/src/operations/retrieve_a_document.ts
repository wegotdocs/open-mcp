import { z } from "zod"

export const toolName = `retrieve_a_document`
export const toolDescription = `Retrieve a Document`
export const baseUrl = `https://api.increase.com`
export const path = `/documents/{document_id}`
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

export const inputParams = z.object({ "path": z.object({ "document_id": z.string().describe("The identifier of the Document to retrieve.") }).optional() }).shape