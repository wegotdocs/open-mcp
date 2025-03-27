import { z } from "zod"

export const toolName = `updateclass`
export const toolDescription = `Update the class`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "name": z.string().max(255).describe("The name of the class").optional(), "section": z.string().max(255).describe("The section of the class").optional() }).describe("Update of a classroom").optional() }).shape