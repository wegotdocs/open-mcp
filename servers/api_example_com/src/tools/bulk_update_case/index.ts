import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulk_update_case",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/case/_bulk",
  "method": "patch",
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
      "ids": "ids",
      "title": "title",
      "description": "description",
      "severity": "severity",
      "startDate": "startDate",
      "endDate": "endDate",
      "tags": "tags",
      "flag": "flag",
      "tlp": "tlp",
      "pap": "pap",
      "status": "status",
      "summary": "summary",
      "assignee": "assignee",
      "impactStatus": "impactStatus",
      "customFields": "customFields",
      "taskRule": "taskRule",
      "observableRule": "observableRule",
      "addTags": "addTags",
      "removeTags": "removeTags"
    }
  },
  inputParamsSchema
}

export default tool