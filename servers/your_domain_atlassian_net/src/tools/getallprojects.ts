import { z } from "zod"

export const toolName = `getallprojects`
export const toolDescription = `Get all projects`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project`
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
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "q_expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `lead` Returns information about the project lead.\n *  `projectKeys` Returns all project keys associated with the project.").optional(), "q_recent": z.number().int().describe("Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.").optional(), "q_properties": z.array(z.string()).describe("A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional() }).shape