import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createversion",
  "toolDescription": "Create version",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/version",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "approvers": "approvers",
      "archived": "archived",
      "description": "description",
      "driver": "driver",
      "expand": "expand",
      "id": "id",
      "issuesStatusForFixVersion": "issuesStatusForFixVersion",
      "moveUnfixedIssuesTo": "moveUnfixedIssuesTo",
      "name": "name",
      "operations": "operations",
      "overdue": "overdue",
      "project": "project",
      "projectId": "projectId",
      "releaseDate": "releaseDate",
      "released": "released",
      "self": "self",
      "startDate": "startDate",
      "userReleaseDate": "userReleaseDate",
      "userStartDate": "userStartDate"
    }
  },
  inputParamsSchema
}

export default tool