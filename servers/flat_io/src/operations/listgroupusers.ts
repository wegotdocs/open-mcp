import { z } from "zod"

export const toolName = `listgroupusers`
export const toolDescription = `List group's users`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/groups/{group}/users`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "source": z.enum(["googleClassroom","microsoftGraph","clever"]).describe("Filter the users by their source\n").optional() }).optional() }).shape