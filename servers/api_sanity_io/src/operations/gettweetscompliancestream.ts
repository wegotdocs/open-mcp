import { z } from "zod"

export const toolName = `gettweetscompliancestream`
export const toolDescription = `Tweets Compliance stream`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/compliance/stream`
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

export const inputParams = z.object({ "query": z.object({ "backfill_minutes": z.number().int().gte(0).lte(5).describe("The number of minutes of backfill requested.").optional(), "partition": z.number().int().gte(1).lte(4).describe("The partition number."), "start_time": z.string().datetime({ offset: true }).describe("YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.").optional(), "end_time": z.string().datetime({ offset: true }).describe("YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.").optional() }).optional() }).shape