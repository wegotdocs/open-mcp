import { z } from "zod"

export const toolName = `deleteregistration`
export const toolDescription = `Delete registration`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/registrations/{registrationId}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "registrationId": z.number().int().gte(1).describe("Registration ID") }).optional() }).shape