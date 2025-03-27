import { z } from "zod"

export const toolName = `markscorecommentunresolved`
export const toolDescription = `Mark the comment as unresolved`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/scores/{score}/comments/{comment}/resolved`
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

export const inputParams = z.object({ "query": z.object({ "sharingKey": z.string().describe("This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n").optional() }).optional() }).shape