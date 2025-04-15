import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproject",
  "toolDescription": "Create project",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/project",
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
      "assigneeType": "assigneeType",
      "avatarId": "avatarId",
      "categoryId": "categoryId",
      "description": "description",
      "fieldConfigurationScheme": "fieldConfigurationScheme",
      "issueSecurityScheme": "issueSecurityScheme",
      "issueTypeScheme": "issueTypeScheme",
      "issueTypeScreenScheme": "issueTypeScreenScheme",
      "key": "key",
      "lead": "lead",
      "leadAccountId": "leadAccountId",
      "name": "name",
      "notificationScheme": "notificationScheme",
      "permissionScheme": "permissionScheme",
      "projectTemplateKey": "projectTemplateKey",
      "projectTypeKey": "projectTypeKey",
      "url": "url",
      "workflowScheme": "workflowScheme"
    }
  },
  inputParamsSchema
}

export default tool