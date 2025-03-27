import { z } from "zod"

export const toolName = `put_api_v1_server_redundancy_host_`
export const toolDescription = `Update a server redundancy policy`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/redundancy/{host}`
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

export const inputParams = z.object({ "path": z.object({ "host": z.string().describe("server domain to mirror") }).optional(), "body": z.object({ "redundancyAllowed": z.boolean().describe("allow mirroring of the host's local videos") }).optional() }).shape