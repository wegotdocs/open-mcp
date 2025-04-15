import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcomponent",
  "toolDescription": "Create component",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/component",
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
      "ari": "ari",
      "assignee": "assignee",
      "assigneeType": "assigneeType",
      "description": "description",
      "id": "id",
      "isAssigneeTypeValid": "isAssigneeTypeValid",
      "lead": "lead",
      "leadAccountId": "leadAccountId",
      "leadUserName": "leadUserName",
      "metadata": "metadata",
      "name": "name",
      "project": "project",
      "projectId": "projectId",
      "realAssignee": "realAssignee",
      "realAssigneeType": "realAssigneeType",
      "self": "self"
    }
  },
  inputParamsSchema
}

export default tool