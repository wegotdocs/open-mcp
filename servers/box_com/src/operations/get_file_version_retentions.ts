import { z } from "zod"

export const toolName = `get_file_version_retentions`
export const toolDescription = `List file version retentions`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/file_version_retentions`
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

export const inputParams = z.object({ "query": z.object({ "file_id": z.string().describe("Filters results by files with this ID.").optional(), "file_version_id": z.string().describe("Filters results by file versions with this ID.").optional(), "policy_id": z.string().describe("Filters results by the retention policy with this ID.").optional(), "disposition_action": z.enum(["permanently_delete","remove_retention"]).describe("Filters results by the retention policy with this disposition\naction.").optional(), "disposition_before": z.string().describe("Filters results by files that will have their disposition\ncome into effect before this date.").optional(), "disposition_after": z.string().describe("Filters results by files that will have their disposition\ncome into effect after this date.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional(), "marker": z.string().describe("Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.").optional() }).optional() }).shape