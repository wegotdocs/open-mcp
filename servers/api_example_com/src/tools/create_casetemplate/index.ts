import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_casetemplate",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/caseTemplate",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "displayName": "displayName",
      "titlePrefix": "titlePrefix",
      "description": "description",
      "severity": "severity",
      "tags": "tags",
      "flag": "flag",
      "tlp": "tlp",
      "pap": "pap",
      "summary": "summary",
      "tasks": "tasks",
      "pageTemplateIds": "pageTemplateIds",
      "customFields": "customFields"
    }
  },
  inputParamsSchema
}

export default tool