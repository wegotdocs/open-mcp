import { z } from "zod"

export const toolName = `getactivitylogs`
export const toolDescription = `Get activity logs`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/activity_logs`
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
export const keys = {
  "query": [
    "events",
    "start_time",
    "end_time",
    "limit",
    "order"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "events": z.string().describe("Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default.").optional(), "start_time": z.number().describe("Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified.").optional(), "end_time": z.number().describe("Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified.").optional(), "limit": z.number().describe("Maximum number of events to return. This param defaults to 1000 if unspecified.").optional(), "order": z.enum(["asc","desc"]).describe("Event order by timestamp. This param can be either \"asc\" (default) or \"desc\".") }).shape