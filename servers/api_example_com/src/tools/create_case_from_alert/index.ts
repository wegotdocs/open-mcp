import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_case_from_alert",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/alert/{alertId}/case",
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
    "path": {
      "alertId": "alertId"
    },
    "body": {
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
      "customFields": "customFields",
      "caseTemplate": "caseTemplate",
      "tasks": "tasks",
      "pages": "pages",
      "sharingParameters": "sharingParameters",
      "taskRule": "taskRule",
      "observableRule": "observableRule"
    }
  },
  inputParamsSchema
}

export default tool