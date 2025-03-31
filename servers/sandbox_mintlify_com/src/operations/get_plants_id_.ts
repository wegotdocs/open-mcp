import { z } from "zod"

export const toolName = `get_plants_id_`
export const toolDescription = ``
export const baseUrl = `https://sandbox.mintlify.com`
export const path = `/plants/{id}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("The ID of plant to fetch") }).optional() }).shape