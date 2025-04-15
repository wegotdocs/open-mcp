import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createworkflowscheme",
  "toolDescription": "Create workflow scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflowscheme",
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
      "defaultWorkflow": "defaultWorkflow",
      "description": "description",
      "draft": "draft",
      "id": "id",
      "issueTypeMappings": "issueTypeMappings",
      "issueTypes": "issueTypes",
      "lastModified": "lastModified",
      "lastModifiedUser": "lastModifiedUser",
      "name": "name",
      "originalDefaultWorkflow": "originalDefaultWorkflow",
      "originalIssueTypeMappings": "originalIssueTypeMappings",
      "self": "self",
      "updateDraftIfNeeded": "updateDraftIfNeeded"
    }
  },
  inputParamsSchema
}

export default tool