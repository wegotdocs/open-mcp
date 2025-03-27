import { z } from "zod"

export const toolName = `simulate_a_tax_document_being_created`
export const toolDescription = `Simulate a tax document being created`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/documents`
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

export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The identifier of the Account the tax document is for.") }).optional() }).shape