import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "render_case_report_template",
  "toolDescription": "Make a render for a case report template. This will output the rendering of the template but the rendering will not be saved.\n\n`caseId` is optional. If not provided, fake data will be used.\n\nYou can either provide a full report definition o",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/caseReport/render",
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
      "format": "format",
      "definition": "definition",
      "caseReportTemplateId": "caseReportTemplateId",
      "caseId": "caseId",
      "maxElements": "maxElements"
    }
  },
  inputParamsSchema
}

export default tool