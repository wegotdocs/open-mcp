import { z } from "zod"

export const toolName = `createconfigurablelogdrain`
export const toolDescription = `Creates a Configurable Log Drain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/log-drains`
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
export const keys = {
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "deliveryFormat",
    "url",
    "headers",
    "projectIds",
    "sources",
    "environments",
    "secret",
    "samplingRate",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "deliveryFormat": z.enum(["json","ndjson"]).describe("The delivery log format"), "url": z.string().url().regex(new RegExp("^(http|https)?://")).describe("The log drain url"), "headers": z.record(z.string()).describe("Headers to be sent together with the request").optional(), "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(), "sources": z.array(z.enum(["static","lambda","build","edge","external","firewall"])).min(1), "environments": z.array(z.enum(["preview","production"])).min(1).optional(), "secret": z.string().describe("Custom secret of log drain").optional(), "samplingRate": z.number().gte(0.01).lte(1).describe("The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points").optional(), "name": z.string().describe("The custom name of this log drain.").optional() }).shape