import { z } from "zod"

export const toolName = `getprojectfiles`
export const toolDescription = `Get files in a project`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/projects/{project_id}/files`
export const method = `get`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
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
  "query": [
    "branch_data"
  ],
  "header": [],
  "path": [
    "project_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "project_id": z.string().describe("ID of the project to list files from"), "branch_data": z.boolean().describe("Returns branch metadata in the response for each main file with a branch inside the project.") }).shape