import { z } from "zod"

export const toolName = `requestdelete`
export const toolDescription = `Delete User Account`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/user`
export const method = `delete`
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
  "path": [],
  "cookie": [],
  "body": [
    "reasons"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the User account is being deleted."), "description": z.string().describe("Description of the reason why the User account is being deleted.") }).strict().describe("An object describing the reason why the User account is being deleted.")).describe("Optional array of objects that describe the reason why the User account is being deleted.").optional() }).shape