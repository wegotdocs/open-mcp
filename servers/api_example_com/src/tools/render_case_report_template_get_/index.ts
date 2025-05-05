import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "render_case_report_template_get_",
  "toolDescription": "Same as render but uses a GET http and cannot take a description as input",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/caseReport/render",
  "method": "get",
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
    "query": {
      "format": "format",
      "caseReportTemplateId": "caseReportTemplateId",
      "caseId": "caseId",
      "maxElements": "maxElements"
    }
  },
  inputParamsSchema
}

export default tool