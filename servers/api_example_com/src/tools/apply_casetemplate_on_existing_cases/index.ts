import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apply_casetemplate_on_existing_cases",
  "toolDescription": "You can choose what part of the case template to apply on the existing case(s)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/case/_bulk/caseTemplate",
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
      "ids": "ids",
      "caseTemplate": "caseTemplate",
      "updateTitlePrefix": "updateTitlePrefix",
      "updateDescription": "updateDescription",
      "updateTags": "updateTags",
      "updateSeverity": "updateSeverity",
      "updateFlag": "updateFlag",
      "updateTlp": "updateTlp",
      "updatePap": "updatePap",
      "updateCustomFields": "updateCustomFields",
      "importTasks": "importTasks",
      "importPages": "importPages"
    }
  },
  inputParamsSchema
}

export default tool