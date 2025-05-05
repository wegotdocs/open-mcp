import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_alert",
  "toolDescription": "Endpoints allows the creation of alerts in TheHive\nIt supports both json input of multipart. **To create observables with files, you need to use a multipart body**.\n\nTo use the multipart, you need to send several parts:\n- a data part with t",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/alert",
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
      "type": "type",
      "source": "source",
      "sourceRef": "sourceRef",
      "externalLink": "externalLink",
      "title": "title",
      "description": "description",
      "severity": "severity",
      "date": "date",
      "tags": "tags",
      "flag": "flag",
      "tlp": "tlp",
      "pap": "pap",
      "customFields": "customFields",
      "summary": "summary",
      "status": "status",
      "assignee": "assignee",
      "caseTemplate": "caseTemplate",
      "observables": "observables",
      "procedures": "procedures"
    }
  },
  inputParamsSchema
}

export default tool