import { z } from "zod"

export const toolName = `getcrawlstatisticsbyfrequency`
export const toolDescription = `Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "query": z.object({ "limit": z.number().int().describe("max number of elements to retrieve").optional(), "frequency": z.enum(["1mn","5mn","60mn"]).describe("Aggregation frequency") }).optional() }).shape