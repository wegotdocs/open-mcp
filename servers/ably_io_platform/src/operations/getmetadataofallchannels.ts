import { z } from "zod"

export const toolName = `getmetadataofallchannels`
export const toolDescription = `Enumerate all active channels of the application`
export const baseUrl = `https://rest.ably.io`
export const path = `/channels`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "limit": z.number().int(), "prefix": z.string().describe("Optionally limits the query to only those channels whose name starts with the given prefix").optional(), "by": z.enum(["value","id"]).describe("optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)").optional() }).optional() }).shape