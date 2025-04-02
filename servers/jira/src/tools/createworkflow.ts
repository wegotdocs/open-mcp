import { z } from "zod"

export const toolName = `createworkflow`
export const toolDescription = `Create workflow`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow`
export const method = `post`
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
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "name",
    "statuses",
    "transitions"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "description": z.string().describe("The description of the workflow. The maximum length is 1000 characters.").optional(), "name": z.string().describe("The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace."), "statuses": z.array(z.object({ "id": z.string().describe("The ID of the status."), "properties": z.record(z.string()).describe("The properties of the status.").optional() }).strict().describe("The details of a transition status.")).describe("The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition."), "transitions": z.array(z.object({ "description": z.string().describe("The description of the transition. The maximum length is 1000 characters.").optional(), "from": z.array(z.string()).describe("The statuses the transition can start from.").optional(), "name": z.string().describe("The name of the transition. The maximum length is 60 characters."), "properties": z.record(z.string()).describe("The properties of the transition.").optional(), "rules": z.string().optional(), "screen": z.string().optional(), "to": z.string().describe("The status the transition goes to."), "type": z.enum(["global","initial","directed"]).describe("The type of the transition.") }).strict().describe("The details of a workflow transition.")).describe("The transitions of the workflow. For the request to be valid, these transitions must:\n\n *  include one *initial* transition.\n *  not use the same name for a *global* and *directed* transition.\n *  have a unique name for each *global* transition.\n *  have a unique 'to' status for each *global* transition.\n *  have unique names for each transition from a status.\n *  not have a 'from' status on *initial* and *global* transitions.\n *  have a 'from' status on *directed* transitions.\n\nAll the transition statuses must be included in `statuses`.") }).shape